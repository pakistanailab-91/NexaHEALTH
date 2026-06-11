'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { User } from '@/types'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import DashboardView from '@/components/modules/DashboardView'

interface AdminDashboardProps {
  user: User
}

export default function AdminDashboard({ user }: AdminDashboardProps) {
  const router = useRouter()
  const [activeModule, setActiveModule] = useState('dashboard')

  const handleLogout = () => {
    if (confirm('Are you sure you want to sign out?')) {
      localStorage.removeItem('user')
      router.push('/auth/login')
    }
  }

  return (
    <div className="flex flex-col h-screen bg-surface">
      <AdminHeader user={user} onLogout={handleLogout} />
      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar activeModule={activeModule} onSelect={setActiveModule} />
        <div className="flex-1 overflow-y-auto p-6">
          <DashboardView />
        </div>
      </div>
    </div>
  )
}
