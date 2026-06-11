// DashboardView.tsx
export default function DashboardView({ onSelectModule }: { onSelectModule?: (module: string) => void }) {
  const stats = [
    { value: '47', label: 'Active Clinicians', delta: '↑ 2 new this week' },
    { value: '99.9%', label: 'System Uptime', delta: '✓ Within SLA' },
    { value: '1,247', label: 'Audit Logs', delta: 'Last 24 hours' },
    { value: '100%', label: 'UK Sovereign', delta: '✓ All data UK-only' },
  ]

  const modules = [
    { id: 'users', title: 'User Management', icon: '👥', desc: 'Create/manage clinician accounts' },
    { id: 'audit', title: 'Audit & Logging', icon: '📋', desc: 'Activity logs and compliance' },
    { id: 'equity', title: 'Equity & Bias', icon: '⚖️', desc: 'Fairness monitoring' },
    { id: 'data', title: 'Data Governance', icon: '🔒', desc: 'GDPR compliance' },
    { id: 'sovereignty', title: 'UK Sovereignty', icon: '🇬🇧', desc: 'Data location verification' },
    { id: 'models', title: 'Model Management', icon: '🤖', desc: 'AI model versions' },
    { id: 'health', title: 'System Health', icon: '💚', desc: 'Uptime & performance' },
    { id: 'reports', title: 'Reports', icon: '📈', desc: 'Clinical outcomes' },
    { id: 'settings', title: 'Settings', icon: '⚙️', desc: 'Configuration & alerts' },
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-serif text-3xl text-ink mb-1">Dashboard</h1>
        <p className="text-xs text-muted font-mono">ADMIN GOVERNANCE PORTAL · UPDATED NOW</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border border-border rounded-lg p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal to-teal2"></div>
            <div className="font-serif text-3xl text-ink font-bold mb-1">{stat.value}</div>
            <div className="text-xs text-muted font-medium">{stat.label}</div>
            <div className="text-10px text-teal font-mono font-bold mt-2">{stat.delta}</div>
          </div>
        ))}
      </div>

      {/* Module Cards Grid */}
      <div>
        <h2 className="text-lg font-semibold text-ink mb-4">9 Admin Modules</h2>
        <div className="grid grid-cols-3 gap-4">
          {modules.map((mod) => (
            <div
              key={mod.id}
              onClick={() => onSelectModule?.(mod.id)}
              className="bg-white border border-border rounded-lg p-6 cursor-pointer hover:shadow-lg hover:border-teal transition-all"
            >
              <div className="text-4xl mb-3">{mod.icon}</div>
              <h3 className="font-semibold text-ink mb-2">{mod.title}</h3>
              <p className="text-sm text-muted">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}