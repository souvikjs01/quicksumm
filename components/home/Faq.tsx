import React from 'react'
import FaqItem from './FaqItem'

export default function Faq() {
  return (
    <section id="faq" className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Find answers to common questions about our PDF summarization tool.
            </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
            <FaqItem
                question="How accurate are the summaries?"
                answer="Our AI is trained on millions of documents and achieves over 95% accuracy in extracting key information. The summaries capture the main points while maintaining context and relationships between concepts."
            />
            <FaqItem
            question="Is my data secure?"
            answer="Yes, we take data security seriously. Your PDFs are processed in a secure environment and are not stored on our servers unless you explicitly save them to your account. We are GDPR compliant and never share your data with third parties."
            />
            <FaqItem
            question="What types of PDFs can I summarize?"
            answer="Our tool works with most text-based PDFs including research papers, legal documents, reports, articles, and books. It performs best with well-structured documents but can handle various formats."
            />
            <FaqItem
            question="Can I customize the summary length?"
            answer="Yes, Pro and Enterprise users can choose between brief overviews, standard summaries, or detailed summaries based on their needs. You can also specify custom word or character counts."
            />
            <FaqItem
            question="Do you offer refunds?"
            answer="Yes, we offer a 14-day money-back guarantee if you're not satisfied with our service. Simply contact our support team within 14 days of your purchase."
            />
            <FaqItem
            question="Is there an API available?"
            answer="Yes, Enterprise users have access to our API for integrating PDF summarization capabilities into their own applications or workflows. Detailed API documentation is provided upon subscription."
            />
        </div>
        </div>
  </section>
  )
}
