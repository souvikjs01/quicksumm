'use client'
import { FileText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { navLinks } from '@/lib/constants'
import { useAuth, useClerk, UserButton } from '@clerk/nextjs'

export default function Header() {
  const { isSignedIn } = useAuth()
  const { signOut } = useClerk()
  return (
    <header className="border-b overflow-hidden">
        <div className="container flex items-center justify-between max-w-6xl mx-auto py-6 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <FileText className="h-6 w-6 text-primary" />
            <h1 className=' text-2xl'>
                Quick<span className=' text-blue-600'>Summ</span>
            </h1>
          </div>
          {isSignedIn ? <></> : <nav className="hidden md:flex gap-6">
            {navLinks.map((item) => (
                <Link 
                    key={item.id}
                    href={item.href} 
                    className="text-sm text-gray-700 font-medium hover:text-muted-foreground transition-all duration-200"
                >
                    {item.title}
                </Link>
            ))}
          </nav>}
          <div className="flex items-center gap-4">
            {isSignedIn ? (
                <div className=' flex items-center gap-6'>
                    <UserButton />
                    <Button 
                        onClick={() => signOut()}
                    >
                        Log out
                    </Button>
                </div>
            ) : (
                <Button asChild>
                    <Link  href='/sign-in'>
                        Sign in
                    </Link>
                </Button>
            )}
          </div>
        </div>
    </header>
  )
}
