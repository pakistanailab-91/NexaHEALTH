'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import {
  HiEnvelope,
  HiArrowRight,
  HiArrowLeftOnRectangle,
  HiShieldCheck,
} from 'react-icons/hi2'

function VerifyEmailContent() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') // 'signup' or 'reset'
  const email = searchParams.get('email') || ''

  const isReset = type === 'reset'

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-border flex flex-col items-center">
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-teal to-teal2 rounded-2xl flex items-center justify-center shadow-lg mb-6">
        <HiEnvelope className="w-8 h-8 text-white animate-bounce" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold text-ink text-center mb-2">
        {isReset ? 'Check Your Inbox' : 'Verify Your Email'}
      </h2>

      {/* Description */}
      <p className="text-sm text-muted text-center mb-6 leading-relaxed">
        {isReset ? (
          <>
            We have sent a password reset link to{' '}
            <span className="font-semibold text-ink2">{email || 'your email'}</span>.
            Please check your inbox and click the link to reset your password.
          </>
        ) : (
          <>
            Thanks for signing up! We have sent a verification link to{' '}
            <span className="font-semibold text-ink2">{email || 'your email'}</span>.
            Please verify your email address to activate your account.
          </>
        )}
      </p>

      {/* Action Buttons */}
      <div className="w-full space-y-3">
        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-gradient-to-r from-teal to-teal2 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Go to Gmail</span>
          <HiArrowRight className="w-4 h-4" />
        </a>

        <Link
          href="/auth/login"
          className="w-full py-3 bg-surface hover:bg-border/30 text-ink2 border border-border rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <HiArrowLeftOnRectangle className="w-4 h-4" />
          <span>Back to Login</span>
        </Link>
      </div>

      <div className="mt-8 text-[11px] text-muted text-center">
        If you didn't receive the email, please check your spam folder or request a new link.
      </div>
    </div>
  )
}

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-navy to-navy2 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0A94D4_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 text-white relative z-10">
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
          <HiShieldCheck className="w-5 h-5 text-teal2" />
        </div>
        <span className="font-serif text-xl font-bold tracking-wide">NexaHEALTH</span>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full flex justify-center">
        <Suspense fallback={
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-border flex items-center justify-center">
            <span className="text-muted text-sm">Loading...</span>
          </div>
        }>
          <VerifyEmailContent />
        </Suspense>
      </div>
    </div>
  )
}
