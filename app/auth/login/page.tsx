'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { useAuthStore } from '@/lib/authStore'
import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const setUser = useAuthStore((state) => state.setUser)

  const handleLogin = async (email: string, password: string) => {
    setError('')
    try {
      const response = await authClient.signIn.email({
        email,
        password,
        callbackURL: '/admin'
      })

      if (response.error) {
        setError(response.error.message || 'Invalid email or password')
      } else {
        const user = response.data?.user
        if (user) {
          const initials = user.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2) || 'US'

          const userData = {
            id: user.id,
            name: user.name,
            email: user.email,
            initials,
            role: (user as any).role || 'Governance Manager',
            nhsTrust: (user as any).nhsTrust || 'General NHS Trust'
          }
          
          setUser(userData)
          localStorage.setItem('user', JSON.stringify(userData))
          const userRole = (userData.role || '').toLowerCase()
          const isAdmin = userRole === 'system administrator' || userRole === 'admin'
          router.push(isAdmin ? '/admin' : '/blank')
        }
      }
    } catch (err: any) {
      setError(err?.message || 'An error occurred during authentication')
    }
  }

  return <LoginForm onSubmit={handleLogin} error={error} />
}
