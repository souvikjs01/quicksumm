import React from 'react'
import PdfUploadDemo from './UploadPdfDemo'

export default function Demos() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Try it yourself</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Upload your PDF and see how our AI summarizes it in seconds.
                </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
                <PdfUploadDemo />
            </div>
        </div>
    </section>
  )
}
