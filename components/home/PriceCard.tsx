import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant?: "default" | "outline"
  popular?: boolean
}

export default function PricingCard({
  title,
  price,
  period = "",
  description,
  features,
  buttonText,
  buttonVariant = "default",
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col p-6 bg-background rounded-lg border ${popular ? "border-primary shadow-md" : "shadow-sm"}`}
    >
      {popular && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 text-xs font-medium text-primary-foreground bg-primary rounded-full">
          Most Popular
        </div>
      )}
      <div className="mb-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="ml-1 text-muted-foreground">{period}</span>}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="mb-6 space-y-2 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={buttonVariant} className="w-full">
        {buttonText}
      </Button>
    </div>
  )
}

