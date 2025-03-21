import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export function SubscriptionBanner() {
  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Zap className="mr-2 h-5 w-5 text-primary" />
          Upgrade to Pro
        </CardTitle>
        <CardDescription>Get more out of your PDF summaries with our Pro plan</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <div className="mr-2 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
            </div>
            <span className="text-sm">Process up to 60 PDFs per month (vs. 10 on Free)</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
            </div>
            <span className="text-sm">Unlimited Q&A sessions with your documents</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
            </div>
            <span className="text-sm">Process larger documents (up to 100 pages)</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Upgrade Now</Button>
      </CardFooter>
    </Card>
  )
}

