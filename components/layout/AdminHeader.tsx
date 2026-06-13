'use client'

import type { User } from '@/types'
import { HiShieldCheck, HiArrowRightOnRectangle } from 'react-icons/hi2'

interface AdminHeaderProps {
  user: User
  onLogout: () => void
}

export default function AdminHeader({ user, onLogout }: AdminHeaderProps) {
  return (
    <div className="h-14 bg-navy border-b border-white/10 flex items-center px-5 gap-5">
      <div className="flex items-center gap-3 mr-8">
        <div className="w-8 h-8 bg-linear-to-br from-teal to-teal2 rounded flex items-center justify-center">
          <HiShieldCheck className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="font-serif text-base text-white">NexaHealth</div>
          <div className="text-[10px] text-white/35 font-mono tracking-widest">ADMIN PORTAL</div>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div className="text-right">
          <div className="text-xs md:text-sm font-medium text-white">{user.name}</div>
          <div className="text-[10px] md:text-xs text-white/60">{user.role}</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-linear-to-br from-teal to-teal2 flex items-center justify-center text-xs font-bold text-white">
          {user.initials}
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-1.5 p-2 md:px-3 md:py-1 text-xs font-medium text-white bg-white/10 border border-white/20 rounded-full md:rounded hover:bg-white/15 transition cursor-pointer"
        >
          <HiArrowRightOnRectangle className="w-3.5 h-3.5" />
          <span className='hidden md:inline-block'>Sign Out</span>
        </button>
      </div>
    </div>
  )
}
