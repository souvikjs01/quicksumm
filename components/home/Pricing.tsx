import React from 'react'
import PricingCard from './PriceCard'

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Choose the plan that works best for your needs.
              </p>
            </div>
            <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2">
              <PricingCard
                title="Free"
                price="$0"
                description="Perfect for occasional use"
                features={["5 PDF summaries per month", "Max 10 pages per PDF", "Basic summaries", "Email support"]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
              <PricingCard
                title="Pro"
                price="$8"
                period="/month"
                description="Ideal for regular users"
                features={[
                  "50 PDF summaries per month",
                  "Max 50 pages per PDF",
                  "Advanced summaries",
                  "Key points extraction",
                  "Priority support",
                ]}
                buttonText="Start Free Trial"
                buttonVariant="default"
                popular={true}
              />
            </div>
        </div>
    </section>
  )
}
