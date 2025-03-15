import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export default function SemiFooter() {
  return (
    <section className="py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Start Saving Time Today</h2>
              <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
                Join thousands of professionals who use PDFSummarizer to extract insights faster.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Try for free <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  See pricing
                </Button>
              </div>
            </div>
        </div>
    </section>
  )
}
