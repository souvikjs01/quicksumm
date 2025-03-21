import { SubscriptionBanner } from '@/components/dashboard/SubscriptionBanner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { isUserPro } from '@/lib/actions/user-actions'
import { auth } from '@clerk/nextjs/server'
import { 
  BarChart2, 
  Clock, 
  FileText, 
  Zap 
} from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'



export default async function page() {
  const { userId } = await auth()
  if(!userId) redirect('/sign-in')
  
  const userData = await isUserPro(userId)
  if(!userData.success) {
    toast.error("Something went wrong")
    return
  }

  let userPlan = userData.data?.pro

  const percentUsed = (userData.data?.quotaCount! / (userPlan ? 60 : 10)) * 100

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{userData.data?.name}</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your PDF summaries.</p>
      </div>

      {!userData.data?.pro && <SubscriptionBanner />}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Quota</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {userData.data?.quotaCount} / {userData.data?.pro ? 60 : 10}
            </div>
            <Progress value={percentUsed} className="mt-2" />
            <p className="mt-2 text-xs text-muted-foreground">
              {userPlan ? "Free plan: 10 PDFs per month" : "Pro plan: 60 PDFs per month"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-2">+3 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Q&A Sessions</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-2">+8 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Last Activity</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2h ago</div>
            <p className="text-xs text-muted-foreground mt-2">PDF summary generated</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
