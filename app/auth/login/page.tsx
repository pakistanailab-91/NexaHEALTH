'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { validateCredentials, createUser } from '@/lib/auth'
import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleLogin = async (email: string, password: string) => {
    if (validateCredentials(email, password)) {
      const user = createUser(email)
      localStorage.setItem('user', JSON.stringify(user))
      router.push('/admin')
    } else {
      setError('Invalid email or password')
    }
  }

  return <LoginForm onSubmit={handleLogin} error={error} />
}
