'use client'

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { extractTextFromPDF } from "@/lib/pdf-utils"
import { manageQuota } from "@/lib/quota-actions"
import { 
  AlertCircle, 
  CheckCircle, 
  FileText, 
  Loader2, 
  Upload 
} from "lucide-react"
import { useCallback, useState } from "react"
import { toast } from "sonner"

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

      // decrease quota:
      const quotaRes = await manageQuota();
      if(quotaRes.error && !quotaRes.upgrade) {
        toast.error('Something went wrong')
      } else if(quotaRes.upgrade) {
        toast.error("You are out of your quota, upgrade now!")
        return;
      } else if(quotaRes.success) {
        toast.success("Analyze successfully");
      }

    } catch (err) {      
      setError(err instanceof Error ? err.message : 'Failed to analyze PDF.')
    } finally {
      setLoading(false)
    }
  }, [selectedFile])
  
  const formatSummaryContent = (text: string) => {
    let formatted = text.replace(/\*\*/g, '');

    // Replace single * at start of line with hyphen for bullet points
    formatted = formatted.replace(/^\s*\*\s+/gm, '- ');

    // Remove any remaining * markers (not at start of line)
    formatted = formatted.replace(/\*/g, '');

    // Ensure proper spacing after colons
    formatted = formatted.replace(/:\s*\n/g, ':\n\n');
    
    // Trim whitespace from each line
    formatted = formatted
      .split('\n')
      .map(line => line.trim())
      .join('\n');
    
    return formatted.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-4 text-gray-800 leading-relaxed font-medium">
        {paragraph.replace(/^\s*(?:\*\*|[-•*])\s*/, '• ')}
      </p>
    ))
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <Card className="border-none shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-transparent">
            QuickSumm
          </CardTitle>
          <CardDescription className="text-muted-foreground text-base">
            Upload a PDF document to analyze its content and generate an AI summary
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6 space-y-6">
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
                <div className="prose prose-sm dark:prose-invert max-w-2xl mx-auto">                  
                   {formatSummaryContent(summary)}
                </div>
              </CardContent>

              <CardFooter className="flex justify-end pt-4 text-sm text-muted-foreground">
                <p>Powered by AI analysis</p>
              </CardFooter>
            </Card>
          )}

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
    </div>
  )
}
