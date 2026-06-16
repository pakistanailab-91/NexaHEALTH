'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { useAuthStore } from '@/lib/authStore'
import RegisterForm from '@/components/auth/RegisterForm'

export default function RegisterPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const setUser = useAuthStore((state) => state.setUser)

  const handleRegister = async (data: {
    name: string
    email: string
    password: string
  }) => {
    setError('')
    setLoading(true)
    try {
      const response = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        callbackURL: '/admin',
      })
      
      if (response.error) {
        setError(response.error.message || 'Registration failed')
      } else {
        // Calculate initials from name
        const initials = data.name
          .split(' ')
          .map((n) => n[0])
          .join('')
          .toUpperCase()
          .slice(0, 2) || 'NH'
          
        // Store session user in Zustand store
        setUser({
          id: response.data?.user?.id,
          name: data.name,
          email: data.email,
          initials,
          role: 'Governance Manager',
        } as any)
        router.push(`/auth/verify-email?type=signup&email=${encodeURIComponent(data.email)}`)
      }
    } catch (err: any) {
      setError(err?.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return <RegisterForm onSubmit={handleRegister} error={error} loading={loading} />
}
