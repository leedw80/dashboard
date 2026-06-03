import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { trafficData } from '../data/mockData'

const COLORS = ['#6366f1', '#22c55e', '#f59e0b']

export default function PieChartWidget() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">트래픽 소스</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={trafficData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label={({ name, value }) => `${name} ${value}%`}
          >
            {trafficData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
