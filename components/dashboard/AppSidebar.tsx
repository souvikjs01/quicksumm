'use client'
import React from 'react'
import { 
    Sidebar, 
    SidebarContent, 
    SidebarFooter, 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarGroupLabel, 
    SidebarHeader, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem, 
    SidebarSeparator,
} from '../ui/sidebar'
import { 
    Bot, 
    CreditCard, 
    FileText, 
    History, 
    LayoutDashboard, 
    Upload 
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import UpgradePro from './UpgradePro'

const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard
    },
    {
        title: "Upload PDF",
        url: "/upload",
        icon: Upload,
    },
    {
        title: "Q&A",
        url: "/qa",
        icon: Bot
    },
    {
        title: "History",
        url: "/history",
        icon: History
    },
    {
        title: "Billing",
        url: "/billing",
        icon: CreditCard
    },
]

export default function AppSidebar() {
  const pathname = usePathname()
//   const { open } = useSidebar()

  return (
    <Sidebar collapsible='icon' variant='floating'>
        <SidebarHeader>
            <div className="flex items-center gap-2 font-bold text-xl py-2">
                <FileText className="h-6 w-6 text-primary" />
                <h1 className=' text-xl'>
                    Quick<span className=' text-blue-600'>Summ</span>
                </h1>
          </div>
        </SidebarHeader>

        <SidebarSeparator className=' w-3/4 mx-auto'/>

        <SidebarContent>
            <SidebarGroup className=' gap-y-1'>
                <SidebarGroupLabel className=' text-xs'>
                    Application
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url}
                                        className={cn({'!bg-primary !text-white' : pathname===item.url })}
                                    >
                                        <item.icon />
                                        <span className='font-medium'>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        
        <SidebarSeparator className=' w-3/4 mx-auto'/>
        <SidebarFooter>
            <UpgradePro />
        </SidebarFooter>
    </Sidebar>
  )
}
