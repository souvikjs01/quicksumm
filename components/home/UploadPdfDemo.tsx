"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Upload, Check, Loader2 } from "lucide-react"

export default function PdfUploadDemo() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [summary, setSummary] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setSummary(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    // Simulate upload and processing
    setIsUploading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsUploading(false)

    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)

    // Mock summary result
    setSummary(
      "This document discusses the impact of artificial intelligence on modern business operations. Key points include: 1) AI adoption is accelerating across industries, with 67% of businesses implementing some form of AI; 2) Machine learning algorithms are improving decision-making processes by analyzing vast amounts of data; 3) Challenges remain in ethical implementation and workforce transition; 4) Companies that successfully integrate AI see an average 23% increase in operational efficiency.",
    )
  }

  return (
    <div className="rounded-lg border border-primary/20 bg-white/80 backdrop-blur-sm p-6 shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="pdf-upload"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Upload PDF
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="pdf-upload"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary/30 rounded-lg cursor-pointer bg-white/50 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {file ? (
                  <div className="flex items-center space-x-2">
                    <FileText className="h-8 w-8 text-primary" />
                    <span className="font-medium">{file.name}</span>
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                ) : (
                  <>
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">PDF (MAX. 10MB)</p>
                  </>
                )}
              </div>
              <input
                id="pdf-upload"
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
        <Button type="submit" className="w-full" disabled={!file || isUploading || isProcessing}>
          {isUploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing with AI...
            </>
          ) : (
            "Summarize PDF"
          )}
        </Button>
      </form>

      {summary && (
        <div className="mt-6 space-y-2">
          <h3 className="text-lg font-medium">Summary</h3>
          <div className="rounded-md bg-gradient-to-r from-[#f0ebff] to-primary/5 p-4 border border-primary/10">
            <p className="text-sm">{summary}</p>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" size="sm">
              Copy Summary
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

