import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Extract Key Insights from PDFs in just Seconds
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our AI-powered tool analyzes and summarizes your PDF documents instantly, saving you hours of
                    reading time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1.5">
                    Try for free <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    See how it works
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <img
                          src='/user1.png'
                          alt="User avatar"
                          className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <img
                          src='/user2.png'
                          alt="User avatar"
                          className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <img
                          src='/user3.png'
                          alt="User avatar"
                          className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <img
                          src='/user4.png'
                          alt="User avatar"
                          className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <img
                          src='/user7.png'
                          alt="User avatar"
                          className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <img
                          src='/user2.png'
                          alt="User avatar"
                          className="h-full w-full object-cover"
                        />
                    </div>
                  </div>
                  <div className="text-muted-foreground">
                    Trusted by <span className="font-medium text-foreground">2,000+</span> professionals
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative rounded-lg border bg-background p-2 shadow-lg">
                  <img
                    src="/placeholder.svg?height=400&width=600&text=PDF+Summarizer+Demo"
                    alt="PDF Summarizer Demo"
                    className="rounded border bg-muted"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
                  Powered by AI
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}
