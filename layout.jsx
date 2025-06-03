import Sidebar from '@/components/agent1/sidebar'

export default function Agent1Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  )
} 