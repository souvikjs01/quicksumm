'use client'

import { extractTextFromPDF } from "@/lib/pdf-utils"
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

  // const formatSummaryContent = (text: string) => {
  //   return text.split('\n').map((paragraph, index) => (
  //     <p key={index} className="mb-4 text-gray-300 leading-relaxed">
  //       {paragraph.replace(/^\s*[\-•*]\s*/, '• ')}
  //     </p>
  //   ))
  // }

  return (
    <div>
      dashboard
      <div className="space-y-6">
        <div className="relative group">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf"
            className="block w-full text-gray-400 file:mr-4 file:py-3 file:px-6 
                      file:rounded-xl file:border-0 file:text-sm file:font-medium
                      file:bg-gradient-to-r file:from-purple-500 file:to-pink-500 
                      file:text-white hover:file:opacity-90 transition-all
                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          />
        </div>
        <button
          onClick={handleAnalyze}
          disabled={!selectedFile || loading}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium
                  py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02]
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                  shadow-lg hover:shadow-purple-500/25"
        >
          {loading ? 'Processing...' : 'Analyze Document'}
        </button>
        {error && <p>{error}</p>}
        <p>summary:--{summary}</p>
        {/* {summary && (
              <div className="bg-[#1A1A23] rounded-2xl p-8 shadow-2xl border border-[#2A2A35] animate-fade-in">
                <div className="flex items-center mb-8">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Document Insights
                  </h2>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  {formatSummaryContent(summary)}
                </div>
                
                <div className="mt-8 pt-6 border-t border-[#2A2A35] flex items-center justify-between text-sm text-gray-400">
                  <span>Generated at {new Date().toLocaleTimeString()}</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">
                    AI Summary
                  </span>
                </div>
              </div>
            )} */}
      </div>       
    </div>
  )
}
