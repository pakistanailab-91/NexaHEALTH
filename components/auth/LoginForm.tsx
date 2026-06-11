'use client'

import { useState } from 'react'

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

  return (
    <div className="flex h-screen bg-gradient-to-br from-navy to-navy2">
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-center justify-center p-10 text-white">
        <div className="w-16 h-16 bg-gradient-to-br from-teal to-teal2 rounded-lg flex items-center justify-center shadow-lg mb-5">
          <svg className="w-8 h-8 stroke-white fill-none stroke-2" viewBox="0 0 16 16">
            <path d="M8 2L3 5v4c0 3 2.3 5.8 5 6.5C10.7 14.8 13 12 13 9V5L8 2z" />
          </svg>
        </div>
        <h1 className="font-serif text-4xl font-bold mb-3 text-center">NexaHealth</h1>
        <p className="text-lg opacity-70 text-center mb-10">Admin & Governance Portal</p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-5 max-w-sm mt-10">
          <div className="flex gap-3"><div className="w-8 h-8 bg-white bg-opacity-10 rounded flex items-center justify-center flex-shrink-0 text-xl">🔒</div><p className="text-sm opacity-80">Audit & Logging</p></div>
          <div className="flex gap-3"><div className="w-8 h-8 bg-white bg-opacity-10 rounded flex items-center justify-center flex-shrink-0 text-xl">⚖️</div><p className="text-sm opacity-80">GDPR Compliance</p></div>
          <div className="flex gap-3"><div className="w-8 h-8 bg-white bg-opacity-10 rounded flex items-center justify-center flex-shrink-0 text-xl">👥</div><p className="text-sm opacity-80">User Management</p></div>
          <div className="flex gap-3"><div className="w-8 h-8 bg-white bg-opacity-10 rounded flex items-center justify-center flex-shrink-0 text-xl">🇬🇧</div><p className="text-sm opacity-80">UK Sovereign</p></div>
          <div className="flex gap-3"><div className="w-8 h-8 bg-white bg-opacity-10 rounded flex items-center justify-center flex-shrink-0 text-xl">📊</div><p className="text-sm opacity-80">Analytics</p></div>
          <div className="flex gap-3"><div className="w-8 h-8 bg-white bg-opacity-10 rounded flex items-center justify-center flex-shrink-0 text-xl">🤖</div><p className="text-sm opacity-80">Model Monitoring</p></div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-0 w-96 bg-white flex items-center justify-center p-10 shadow-2xl">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-ink mb-2">Admin Login</h2>
          <p className="text-sm text-muted mb-6">Sign in to governance portal</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
              ❌ {error}
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
              className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal focus:ring-opacity-20"
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
              className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal focus:ring-opacity-20"
            />
          </div>

          <div className="flex justify-between items-center text-xs mb-4">
            <label className="flex gap-2 cursor-pointer">
              <input type="checkbox" className="cursor-pointer" />
              <span className="text-muted">Remember me</span>
            </label>
            <a href="#" className="text-teal hover:underline">Forgot password?</a>
          </div>

          <button type="submit" className="w-full py-2.5 bg-gradient-to-r from-teal to-teal2 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all">
            Sign In
          </button>

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
