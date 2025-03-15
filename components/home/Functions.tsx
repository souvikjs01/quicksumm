import React from 'react'

export default function Functions() {
  return (
    <section id="how-it-works" className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Our simple three-step process makes summarizing PDFs effortless.
              </p>
            </div>
            <div className="mx-auto mt-12 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  1
                </div>
                <h3 className="mt-4 text-xl font-bold">Upload Your PDF</h3>
                <p className="mt-2 text-muted-foreground">
                  Simply drag and drop your PDF file or select it from your device.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  2
                </div>
                <h3 className="mt-4 text-xl font-bold">AI Processing</h3>
                <p className="mt-2 text-muted-foreground">
                  Our advanced AI analyzes the content, identifying key points and main ideas.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  3
                </div>
                <h3 className="mt-4 text-xl font-bold">Get Your Summary</h3>
                <p className="mt-2 text-muted-foreground">
                  Receive a concise, well-structured summary ready to use or share.
                </p>
              </div>
            </div>
        </div>
    </section>
  )
}
