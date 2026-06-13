'use client'

import { type IconType } from 'react-icons'
import {
  HiChartBarSquare,
  HiUserGroup,
  HiClipboardDocumentList,
  HiScale,
  HiLockClosed,
  HiFlag,
  HiCpuChip,
  HiHeart,
  HiDocumentChartBar,
  HiCog6Tooth,
} from 'react-icons/hi2'

interface Module {
  id: string
  label: string
  icon: IconType
}

const MODULES: Module[] = [
  { id: 'dashboard', label: 'Dashboard', icon: HiChartBarSquare },
  { id: 'users', label: 'User Management', icon: HiUserGroup },
  { id: 'audit', label: 'Audit & Logging', icon: HiClipboardDocumentList },
  { id: 'equity', label: 'Equity & Bias', icon: HiScale },
  { id: 'data', label: 'Data Governance', icon: HiLockClosed },
  { id: 'sovereignty', label: 'UK Sovereignty', icon: HiFlag },
  { id: 'models', label: 'Model Management', icon: HiCpuChip },
  { id: 'health', label: 'System Health', icon: HiHeart },
  { id: 'reports', label: 'Reports', icon: HiDocumentChartBar },
  { id: 'settings', label: 'Settings', icon: HiCog6Tooth },
]

interface AdminSidebarProps {
  activeModule: string
  onSelect: (module: string) => void
}

export default function AdminSidebar({ activeModule, onSelect }: AdminSidebarProps) {
  return (
    <div className="bg-white border-b md:border-b-0 md:border-r border-border shrink-0 relative">
      <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-y-auto">
        {MODULES.map((module) => {
          const Icon = module.icon
          const isActive = activeModule === module.id
          return (
            <div
              key={module.id}
              onClick={() => onSelect(module.id)}
              title={module.label}
              className={`relative flex flex-col md:flex-col lg:flex-row items-center justify-center lg:justify-start px-3 md:px-0 lg:px-4 py-3 md:py-4 lg:py-3 cursor-pointer transition border-l-0 md:border-l-4 border-b-2 md:border-b-0 group min-w-fit md:min-w-14 ${
                isActive
                  ? 'bg-teal/10 text-teal md:border-l-teal border-b-teal'
                  : 'text-muted hover:bg-surface md:border-l-transparent border-b-transparent'
              }`}
            >
              <Icon className={`w-6 h-6 md:w-5 md:h-5 shrink-0 ${isActive ? 'text-teal' : 'text-muted'}`} />
              <span className="text-xs font-medium mt-1 md:hidden">{module.label}</span>
              <span className="hidden lg:block lg:text-sm lg:font-medium lg:ml-3">{module.label}</span>
              <span className="absolute top-1/2 -translate-y-1/2 left-full ml-2 hidden md:group-hover:flex lg:hidden bg-ink text-white px-3 py-1.5 rounded-md text-sm whitespace-nowrap z-50">
                {module.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
