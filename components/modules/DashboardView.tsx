'use client'

import { type IconType } from 'react-icons'
import {
  HiUserGroup,
  HiClipboardDocumentList,
  HiScale,
  HiLockClosed,
  HiFlag,
  HiCpuChip,
  HiHeart,
  HiDocumentChartBar,
  HiCog6Tooth,
  HiArrowTrendingUp,
  HiCheckCircle,
} from 'react-icons/hi2'

interface StatItem {
  value: string
  label: string
  delta: string
  deltaIcon: IconType
}

interface ModuleItem {
  id: string
  title: string
  icon: IconType
  desc: string
}

export default function DashboardView({ onSelectModule }: { onSelectModule?: (module: string) => void }) {
  const stats: StatItem[] = [
    { value: '47', label: 'Active Clinicians', delta: '2 new this week', deltaIcon: HiArrowTrendingUp },
    { value: '99.9%', label: 'System Uptime', delta: 'Within SLA', deltaIcon: HiCheckCircle },
    { value: '1,247', label: 'Audit Logs', delta: 'Last 24 hours', deltaIcon: HiCheckCircle },
    { value: '100%', label: 'UK Sovereign', delta: 'All data UK-only', deltaIcon: HiCheckCircle },
  ]

  const modules: ModuleItem[] = [
    { id: 'users', title: 'User Management', icon: HiUserGroup, desc: 'Create/manage clinician accounts' },
    { id: 'audit', title: 'Audit & Logging', icon: HiClipboardDocumentList, desc: 'Activity logs and compliance' },
    { id: 'equity', title: 'Equity & Bias', icon: HiScale, desc: 'Fairness monitoring' },
    { id: 'data', title: 'Data Governance', icon: HiLockClosed, desc: 'GDPR compliance' },
    { id: 'sovereignty', title: 'UK Sovereignty', icon: HiFlag, desc: 'Data location verification' },
    { id: 'models', title: 'Model Management', icon: HiCpuChip, desc: 'AI model versions' },
    { id: 'health', title: 'System Health', icon: HiHeart, desc: 'Uptime & performance' },
    { id: 'reports', title: 'Reports', icon: HiDocumentChartBar, desc: 'Clinical outcomes' },
    { id: 'settings', title: 'Settings', icon: HiCog6Tooth, desc: 'Configuration & alerts' },
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-serif text-3xl text-ink mb-1">Dashboard</h1>
        <p className="text-xs text-muted font-mono tracking-wider">ADMIN GOVERNANCE PORTAL · UPDATED NOW</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => {
          const DeltaIcon = stat.deltaIcon
          return (
            <div key={i} className="bg-white border border-border rounded-lg p-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal to-teal2"></div>
              <div className="font-serif text-3xl text-ink font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-muted font-medium">{stat.label}</div>
              <div className="flex items-center gap-1 mt-2">
                <DeltaIcon className="w-3 h-3 text-teal" />
                <span className="text-[10px] text-teal font-mono font-bold">{stat.delta}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Module Cards Grid */}
      <div>
        <h2 className="text-lg font-semibold text-ink mb-4">9 Admin Modules</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((mod) => {
            const Icon = mod.icon
            return (
              <div
                key={mod.id}
                onClick={() => onSelectModule?.(mod.id)}
                className="bg-white border border-border rounded-lg p-6 cursor-pointer hover:shadow-lg hover:border-teal transition-all group"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-teal/20 transition-colors">
                  <Icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-semibold text-ink mb-2">{mod.title}</h3>
                <p className="text-sm text-muted">{mod.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}