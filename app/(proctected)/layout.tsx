import AppSidebar from '@/components/dashboard/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <SidebarProvider>
        <AppSidebar />
        
        <main className='w-full m-2'>
            <div className='flex items-center gap-2 border-sidebar-border border shadow rounded-md p-2 px-4 py-4'>
                <div className=' ml-auto'></div>
                <UserButton />
            </div>

            {/* main section */}
            <div className=' border-sidebar-border bg-sidebar border shadow rounded-md overflow-y-scroll h-[calc(100vh-6rem)] p-4 mt-4'>
                {children}
            </div>
        </main>
    </SidebarProvider>
  )
}
