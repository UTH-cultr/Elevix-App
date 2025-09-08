// app/page.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/use-auth'

export default function HomePage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        // Redirect to the appropriate dashboard based on user role
        const redirectPath = 
          user.role === 'ADMIN' ? '/admin' :
          user.role === 'SERVICE_PROVIDER' ? '/provider' :
          '/startup'
        router.push(redirectPath)
      } else {
        router.push('/login')
      }
    }
  }, [user, isLoading, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-accent" />
    </div>
  )
}