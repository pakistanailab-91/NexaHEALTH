'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  HiShieldCheck,
  HiLockClosed,
  HiScale,
  HiUserGroup,
  HiFlag,
  HiChartBar,
  HiCpuChip,
  HiExclamationCircle,
} from 'react-icons/hi2'

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void
  error: string
}

export default function LoginForm({ onSubmit, error }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(email, password)
  }

  const features = [
    { icon: HiLockClosed, label: 'Audit & Logging' },
    { icon: HiScale, label: 'GDPR Compliance' },
    { icon: HiUserGroup, label: 'User Management' },
    { icon: HiFlag, label: 'UK Sovereign' },
    { icon: HiChartBar, label: 'Analytics' },
    { icon: HiCpuChip, label: 'Model Monitoring' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-screen bg-linear-to-br from-navy to-navy2">
      {/* Left Side */}
      <div className="hidden lg:col-span-2 md:flex flex-col items-center justify-center p-10 text-white">
        <div className="w-16 h-16 bg-linear-to-br from-teal to-teal2 rounded-lg flex items-center justify-center shadow-lg mb-5">
          <HiShieldCheck className="w-8 h-8 text-white" />
        </div>
        <h1 className="font-serif text-4xl font-bold mb-3 text-center">NexaHealth</h1>
        <p className="text-lg opacity-70 text-center mb-10">Admin & Governance Portal</p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-5 max-w-sm mt-10">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center shrink-0">
                <feature.icon className="w-4 h-4 text-teal2" />
              </div>
              <p className="text-sm opacity-80">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="bg-white flex items-center justify-center p-10 shadow-2xl">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-ink mb-2">Admin Login</h2>
          <p className="text-sm text-muted mb-6">Sign in to governance portal</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4 flex items-center gap-2">
              <HiExclamationCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-ink2 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="admin@nexahealth.nhs.uk"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-ink2 mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
            />
          </div>

          <div className="flex justify-between items-center text-xs mb-4">
            <label className="flex gap-2 cursor-pointer">
              <input type="checkbox" className="cursor-pointer" />
              <span className="text-muted">Remember me</span>
            </label>
            <Link href="/auth/forgot-password" className="text-teal hover:underline">Forgot password?</Link>
          </div>

          <button type="submit" className="w-full py-2.5 bg-gradient-to-r from-teal to-teal2 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all cursor-pointer">
            Sign In
          </button>

          <p className="mt-6 text-center text-sm text-muted">
            Don't have an account?{' '}
            <a href="/auth/register" className="text-teal hover:underline font-medium">
              Create one
            </a>
          </p>

          <div className="mt-6 p-3 bg-surface rounded-lg text-center text-xs text-muted">
            <p className="font-medium mb-2">Demo credentials:</p>
            <p className="font-mono">admin@nexahealth.nhs.uk</p>
            <p className="font-mono">admin123</p>
          </div>
        </form>
      </div>
    </div>
  )
}
