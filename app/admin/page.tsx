'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/authStore'
import type { User } from '@/types'
import AdminDashboard from '@/components/layout/AdminDashboard'

export default function AdminPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const { user: storeUser, setUser: setStoreUser } = useAuthStore()

  useEffect(() => {
    if (storeUser) {
      setUser(storeUser)
      setLoading(false)
    } else {
      const storedUser = localStorage.getItem('user')
      if (!storedUser) {
        router.push('/auth/login')
      } else {
        const parsed = JSON.parse(storedUser)
        setStoreUser(parsed)
        setUser(parsed)
        setLoading(false)
      }
    }
  }, [storeUser, setStoreUser, router])

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>
  if (!user) return null

  return <AdminDashboard user={user} />
}
