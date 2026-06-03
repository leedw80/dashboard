import Header from './components/Header'
import StatCard from './components/StatCard'
import LineChartWidget from './components/LineChartWidget'
import PieChartWidget from './components/PieChartWidget'
import { stats } from './data/mockData'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChartWidget />
          <PieChartWidget />
        </div>
      </main>
    </div>
  )
}
