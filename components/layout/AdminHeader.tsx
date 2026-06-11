import type { User } from '@/types'

interface AdminHeaderProps {
  user: User
  onLogout: () => void
}

export default function AdminHeader({ user, onLogout }: AdminHeaderProps) {
  return (
    <div className="h-14 bg-navy border-b border-white border-opacity-10 flex items-center px-5 gap-5">
      <div className="flex items-center gap-3 mr-8">
        <div className="w-8 h-8 bg-gradient-to-br from-teal to-teal2 rounded flex items-center justify-center">
          <svg className="w-4 h-4 stroke-white fill-none stroke-2" viewBox="0 0 16 16">
            <path d="M8 2L3 5v4c0 3 2.3 5.8 5 6.5C10.7 14.8 13 12 13 9V5L8 2z" />
          </svg>
        </div>
        <div>
          <div className="font-serif text-base text-white">NexaHealth</div>
          <div className="text-10px text-white opacity-35 font-mono">ADMIN PORTAL</div>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div className="text-right">
          <div className="text-sm font-medium text-white">{user.name}</div>
          <div className="text-xs text-white opacity-60">{user.role}</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal to-teal2 flex items-center justify-center text-xs font-bold text-white">
          {user.initials}
        </div>
        <button onClick={onLogout} className="px-3 py-1 text-xs font-medium text-white bg-white bg-opacity-10 border border-white border-opacity-20 rounded hover:bg-opacity-15 transition">
          Sign Out
        </button>
      </div>
    </div>
  )
}
