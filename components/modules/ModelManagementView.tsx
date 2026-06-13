import { HiCpuChip } from 'react-icons/hi2'

export default function ModelManagementView() {
  const Icon = HiCpuChip
  return (
    <div>
      <h1 className="font-serif text-3xl text-ink mb-1">Model Management</h1>
      <p className="text-xs text-muted font-mono tracking-wider mb-6">ADMIN MODULE · AVAILABLE</p>
      <div className="bg-white border border-border rounded-lg p-6 flex items-center gap-4">
        <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-teal" />
        </div>
        <p className="text-sm text-muted">Module content coming soon...</p>
      </div>
    </div>
  )
}
