'use client'

import React, { useState } from 'react'
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
  HiUser,
  HiEnvelope,
} from 'react-icons/hi2'

interface RegisterFormProps {
  onSubmit: (data: {
    name: string
    email: string
    password: string
  }) => void
  error: string
  loading?: boolean
}

export default function RegisterForm({ onSubmit, error, loading = false }: RegisterFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, email, password })
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-screen bg-linear-to-br from-navy to-navy2">
      {/* Left Side */}
      <div className="hidden lg:col-span-2 md:flex flex-col items-center justify-center p-10 text-white">
        <div className="w-16 h-16 bg-linear-to-br from-teal to-teal2 rounded-lg flex items-center justify-center shadow-lg mb-5">
          <HiShieldCheck className="w-8 h-8 text-white" />
        </div>
        <h1 className="font-serif text-4xl font-bold mb-3 text-center">NexaHEALTH</h1>
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
      <div className="bg-white flex items-center justify-center p-6 md:p-10 shadow-2xl overflow-y-auto">
        <div className="w-full max-w-sm my-auto">
          <h2 className="text-2xl font-semibold text-ink mb-1">Create Account</h2>
          <p className="text-sm text-muted mb-6">Register to NexaHEALTH governance portal</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4 flex items-center gap-2">
              <HiExclamationCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-ink2 mb-1.5 flex items-center gap-2">
                <HiUser className="w-4 h-4 text-muted shrink-0" />
                Full Name
              </label>
              <input
                type="text"
                placeholder="Sarah Johnson"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink2 mb-1.5 flex items-center gap-2">
                <HiEnvelope className="w-4 h-4 text-muted shrink-0" />
                Email Address
              </label>
              <input
                type="email"
                placeholder="sarah.johnson@nexahealth.nhs.uk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink2 mb-1.5 flex items-center gap-2">
                <HiLockClosed className="w-4 h-4 text-muted shrink-0" />
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-gradient-to-r from-teal to-teal2 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-2"
            >
              {loading ? 'Creating Account...' : 'Register'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-teal hover:underline font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
