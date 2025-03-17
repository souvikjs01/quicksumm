'use client'

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { extractTextFromPDF } from "@/lib/pdf-utils"
import { AlertCircle, CheckCircle, FileText, Loader2, Upload } from "lucide-react"
import { useCallback, useState } from "react"

export default function Page() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [summary, setSummary] = useState('')
  const [error, setError] = useState('')
  // const [userData, setUserData] = useState<UserResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {    
    setError('')
    if (!e.target.files?.[0]) return
    setSelectedFile(e.target.files[0])
  }



  const handleAnalyze = useCallback(async () => {
    if (!selectedFile) {
      setError('Please select a file before analyzing.')
      return
    }
    setError('')
    setSummary('')
    setLoading(true)
    try {
      const text = await extractTextFromPDF(selectedFile)      
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ text: text.substring(0, 10000) }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()      
      setSummary(data.summary || 'No summary was generated.')
    } catch (err) {      
      setError(err instanceof Error ? err.message : 'Failed to analyze PDF.')
    } finally {
      setLoading(false)
    }
  }, [selectedFile])

  const formatSummaryContent = (text: string) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-4 text-gray-600 leading-relaxed">
        {paragraph.replace(/^\s*(?:\*\*|[-•*])\s*/, '• ')}
      </p>
    ))
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <Card className="border-none shadow-lg bg-gradient-to-br from-background to-background/80 backdrop-blur">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            QuickSumm
          </CardTitle>
          <CardDescription className="text-muted-foreground text-base">
            Upload a PDF document to analyze its content and generate an AI summary
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6 space-y-6">
          <div className="relative group">
            <div className="border-2 border-dashed border-muted-foreground/20 rounded-xl p-8 transition-all hover:border-primary/50 text-center">
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    {selectedFile ? selectedFile.name : "Drop your PDF here or click to browse"}
                  </p>
                  <p className="text-xs text-muted-foreground">PDF files up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          {selectedFile && (
            <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium flex-1 truncate">{selectedFile.name}</span>
              <Badge variant="outline" className="text-xs">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </Badge>
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            onClick={handleAnalyze}
            disabled={!selectedFile || loading}
            className="w-full h-12 font-medium"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Analyze Document
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {loading && (
        <Card className="mt-8 border-none shadow-xl">
          <CardHeader>
            <Skeleton className="h-6 w-1/3 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <Skeleton key={index} className="h-4 w-full" />
            ))}
          </CardContent>
          <CardFooter>
            <Skeleton className="h-4 w-1/4" />
          </CardFooter>
        </Card>
      )}


      {summary && !loading && (
        <Card className="mt-8 border-none shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-br from-primary/10 to-purple-500/5 blur-3xl -z-10" />
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Document Insights
              </CardTitle>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">AI Summary</Badge>
            </div>
            <CardDescription>
              Generated at {new Date().toLocaleTimeString()} • {selectedFile?.name}
            </CardDescription>
          </CardHeader>
          <Separator className="mb-4" />
          <CardContent>
            <div className="prose prose-sm dark:prose-invert max-w-none">{formatSummaryContent(summary)}</div>
          </CardContent>
          <CardFooter className="flex justify-end pt-4 text-sm text-muted-foreground">
            <p>Powered by AI analysis</p>
          </CardFooter>
        </Card>
      )}
    </div>

    // <div>
    //   dashboard
    //   <div className="space-y-6">
    //     <div className="relative group">
    //       <input
    //         type="file"
    //         onChange={handleFileChange}
    //         accept=".pdf"
    //         className="block w-full text-gray-400 file:mr-4 file:py-3 file:px-6 
    //                   file:rounded-xl file:border-0 file:text-sm file:font-medium
    //                   file:bg-gradient-to-r file:from-purple-500 file:to-pink-500 
    //                   file:text-white hover:file:opacity-90 transition-all
    //                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
    //       />
    //     </div>
    //     <button
    //       onClick={handleAnalyze}
    //       disabled={!selectedFile || loading}
    //       className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium
    //               py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02]
    //                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    //               shadow-lg hover:shadow-purple-500/25"
    //     >
    //       {loading ? 'Processing...' : 'Analyze Document'}
    //     </button>
    //     {error && <p>{error}</p>}
    //     <p>summary:--{summary}</p>
    //     {/* {summary && (
    //           <div className="bg-[#1A1A23] rounded-2xl p-8 shadow-2xl border border-[#2A2A35] animate-fade-in">
    //             <div className="flex items-center mb-8">
    //               <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
    //                 Document Insights
    //               </h2>
    //             </div>
                
    //             <div className="prose prose-invert max-w-none">
    //               {formatSummaryContent(summary)}
    //             </div>
                
    //             <div className="mt-8 pt-6 border-t border-[#2A2A35] flex items-center justify-between text-sm text-gray-400">
    //               <span>Generated at {new Date().toLocaleTimeString()}</span>
    //               <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">
    //                 AI Summary
    //               </span>
    //             </div>
    //           </div>
    //         )} */}
    //   </div>       
    // </div>
  )
}
