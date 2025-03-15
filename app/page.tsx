import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import Pricing from "@/components/home/Pricing";
import SemiFooter from "@/components/home/SemiFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        {/* Demo Section */}
        {/* <section className="py-12 md:py-24 bg-muted/50">
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
        </section> */}

        {/* Features Section */}
        {/* <section id="features" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Powerful Features</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Our AI-powered tool offers a range of features to help you extract insights from your PDFs.
              </p>
            </div>
            <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Instant Summaries"
                description="Get concise summaries of lengthy documents in seconds, not hours."
              />
              <FeatureCard
                icon={<FileText className="h-10 w-10 text-primary" />}
                title="Key Points Extraction"
                description="Automatically identifies and extracts the most important information."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Secure Processing"
                description="Your documents are processed securely and never stored without permission."
              />
              <FeatureCard
                icon={<Clock className="h-10 w-10 text-primary" />}
                title="Time Saving"
                description="Reduce reading time by up to 80% with our smart summarization."
              />
              <FeatureCard
                icon={
                  <svg
                    className="h-10 w-10 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6L20 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 6H4.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 12H4.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 18H4.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12L20 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 18L20 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                title="Custom Summaries"
                description="Choose between brief overviews or detailed summaries based on your needs."
              />
              <FeatureCard
                icon={
                  <svg
                    className="h-10 w-10 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2V4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 20V22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.93 4.93L6.34 6.34"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.66 17.66L19.07 19.07"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12H4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 12H22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.93 19.07L6.34 17.66"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.66 6.34L19.07 4.93"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                title="AI Insights"
                description="Advanced AI analyzes context and relationships between concepts in your documents."
              />
            </div>
          </div>
        </section> */}

        {/* How It Works Section */}
        {/* <section id="how-it-works" className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
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
        </section> */}

        {/* Testimonials */}
        {/* <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
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
                avatar="/placeholder.svg?height=64&width=64&text=SJ"
              />
              <Testimonial
                quote="As a lawyer, I need to review lengthy documents daily. PDFSummarizer has become an essential part of my workflow."
                author="Michael Chen"
                role="Corporate Attorney"
                avatar="/placeholder.svg?height=64&width=64&text=MC"
              />
              <Testimonial
                quote="The accuracy of the summaries is impressive. It's like having a personal assistant who reads everything for me."
                author="Emily Rodriguez"
                role="Marketing Director"
                avatar="/placeholder.svg?height=64&width=64&text=ER"
              />
            </div>
          </div>
        </section> */}

        <Pricing />

        {/* FAQ Section */}
        {/* <section id="faq" className="py-12 md:py-24">
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
        </section> */}

        {/* CTA Section */}
        
        <SemiFooter /> 
      </main>

      <Footer />
    </div>
  );
}
