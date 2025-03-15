import React from 'react'
import Testimonial from './Testimonial'

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">What Our Users Say</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Thousands of professionals trust our tool to save time and extract insights.
                </p>
            </div>
            <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Testimonial
                    quote="This tool has saved me countless hours of reading through research papers. The summaries are accurate and capture all the key points."
                    author="Dr. Sarah Johnson"
                    role="Research Scientist"
                    avatar="/user9.png"
                />
                <Testimonial
                    quote="As a lawyer, I need to review lengthy documents daily. PDFSummarizer has become an essential part of my workflow."
                    author="Michael Chen"
                    role="Corporate Attorney"
                    avatar="/user8.png"
                />
                <Testimonial
                    quote="The accuracy of the summaries is impressive. It's like having a personal assistant who reads everything for me."
                    author="Emily Rodriguez"
                    role="Marketing Director"
                    avatar="/user1.png"
                />
            </div>
        </div>
  </section>
  )
}
