'use client'
import { ArrowRight, Zap } from 'lucide-react'
import React from 'react'
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader,
    CardTitle 
} from '../ui/card'
import { Button } from '../ui/button'
import { createCheckoutSession } from '@/lib/stripe-actions'

export default function UpgradePro() {
  const isSubscribed = false
  const handleClick = async () => {
    await createCheckoutSession()  
  }
  return (
    <Card className="border-none bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 shadow-none gap-y-2">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-sm font-medium">
          <Zap className="mr-2 h-4 w-4 text-primary" />
          Upgrade to Pro
        </CardTitle>
        <CardDescription className="text-xs">Unlock advanced features and higher usage limits</CardDescription>
      </CardHeader>

      <CardContent className="pb-2 text-xs">
        <ul className="space-y-1.5">
          <li className="flex items-center">
            <span className="mr-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Unlimited projects
          </li>
          <li className="flex items-center">
            <span className="mr-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Team collaboration
          </li>
          <li className="flex items-center">
            <span className="mr-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            10M Edge requests
          </li>
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          size="sm" 
          className="w-full gap-1 text-xs flex items-center"
          onClick={handleClick}
        >
          {isSubscribed ? 'Manage Subscription' : 'Upgrade now'}
          <ArrowRight className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  )
}
