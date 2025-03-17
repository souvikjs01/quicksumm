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
import Link from 'next/link'

export default function UpgradePro() {
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
        <Button asChild size="sm" className="w-full gap-1 text-xs">
          <Link href="#" className=' flex items-center'>
            Upgrade now
            <ArrowRight className="h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
