'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    router.push('/auth/login')
  }, [router])

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Redirecting to login...</p>
    </div>
  )
}
