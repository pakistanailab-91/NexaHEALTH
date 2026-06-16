'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/authStore'
import { authClient } from '@/lib/auth-client'
import type { User } from '@/types'
import {
  HiShieldCheck,
  HiArrowLeftOnRectangle,
  HiClock,
  HiUser,
} from 'react-icons/hi2'

export default function BlankOnboardingPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const { user: storeUser, setUser: setStoreUser, logout } = useAuthStore()

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

  const handleLogout = async () => {
    if (confirm('Are you sure you want to sign out?')) {
      try {
        await authClient.signOut()
      } catch (e) {
        console.error('Logout error:', e)
      }
      logout()
      localStorage.removeItem('user')
      router.push('/auth/login')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-surface">
        <div className="text-muted text-sm animate-pulse">Loading onboarding dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Premium Header */}
      <header className="bg-navy text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
            <HiShieldCheck className="w-5 h-5 text-teal2" />
          </div>
          <span className="font-serif text-lg font-bold tracking-wide">NexaHEALTH</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-teal to-teal2 flex items-center justify-center text-xs font-bold text-white shadow-inner uppercase">
              {user?.initials || 'NH'}
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs font-semibold leading-none text-white">{user?.name}</div>
              <div className="text-[10px] text-white/60 mt-0.5">{user?.role}</div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium transition-all cursor-pointer"
          >
            <HiArrowLeftOnRectangle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-6 md:p-12 flex flex-col justify-center items-center text-center">
        <div className="bg-white rounded-2xl border border-border shadow-xl p-8 md:p-12 max-w-xl">
          {/* Accent Badge */}
          <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mx-auto mb-6 text-teal border border-border/50 shadow-inner">
            <HiClock className="w-8 h-8 text-teal2 animate-spin-slow" />
          </div>

          {/* User Specific Greeting */}
          <h1 className="text-2xl md:text-3xl font-bold text-ink mb-3">
            Welcome, {user?.name || 'User'}
          </h1>

          <p className="text-sm text-muted mb-6 leading-relaxed">
            Your account has been registered under the NHS Trust{' '}
            <span className="font-semibold text-ink2">{user?.nhsTrust || 'General NHS Trust'}</span>{' '}
            with the role of <span className="font-semibold text-ink2">{user?.role}</span>.
          </p>

          {/* Setup Notice */}
          <div className="bg-surface border border-border rounded-xl p-4 text-xs text-ink2 text-left mb-6 flex gap-3">
            <div className="w-5 h-5 bg-teal/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <HiUser className="w-3 h-3 text-teal" />
            </div>
            <div>
              <p className="font-semibold mb-1">Onboarding In Progress</p>
              <p className="text-muted leading-relaxed">
                A System Administrator is setting up your data permissions and dashboards. Once your workspace setup is finalized, you will be granted access to the analytical modules.
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="px-6 py-2.5 bg-linear-to-br from-navy to-navy2 text-white rounded-xl text-xs font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <HiArrowLeftOnRectangle className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} NexaHEALTH. All rights reserved. UK Sovereign Analytics.
      </footer>
    </div>
  )
}
