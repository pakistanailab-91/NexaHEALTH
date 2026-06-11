const MODULES = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'users', label: 'User Management', icon: '👥' },
  { id: 'audit', label: 'Audit & Logging', icon: '📋' },
  { id: 'equity', label: 'Equity & Bias', icon: '⚖️' },
  { id: 'data', label: 'Data Governance', icon: '🔒' },
  { id: 'sovereignty', label: 'UK Sovereignty', icon: '🇬🇧' },
  { id: 'models', label: 'Model Management', icon: '🤖' },
  { id: 'health', label: 'System Health', icon: '💚' },
  { id: 'reports', label: 'Reports', icon: '📈' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
]

interface AdminSidebarProps {
  activeModule: string
  onSelect: (module: string) => void
}

export default function AdminSidebar({ activeModule, onSelect }: AdminSidebarProps) {
  return (
    <div className="w-60 bg-white border-r border-border flex-shrink-0 overflow-y-auto">
      {MODULES.map((module) => (
        <div
          key={module.id}
          onClick={() => onSelect(module.id)}
          className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition border-l-4 ${
            activeModule === module.id
              ? 'bg-teal bg-opacity-10 text-teal border-l-teal'
              : 'text-muted hover:bg-surface border-l-transparent'
          }`}
        >
          <span className="text-base flex-shrink-0">{module.icon}</span>
          <span className="text-sm font-medium">{module.label}</span>
        </div>
      ))}
    </div>
  )
}
