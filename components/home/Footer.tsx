import { FileText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold">
            <FileText className="h-5 w-5 text-primary" />
            <span>QuickSumm</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 PDFSummarizer. All rights reserved.</p>
        </div>
    </footer>
  )
}
