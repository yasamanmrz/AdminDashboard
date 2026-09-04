
'use client'
import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Completed', value: 72 },
  { name: 'Remaining', value: 28 },
]


export default function PerformanceChart() {
  return (
    <div className='relative w-full h-36 sm:h-42'>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie data={data} dataKey='value' innerRadius={58} outerRadius={70} startAngle={90} endAngle={-270} paddingAngle={2} stroke='none'>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? 'var(--primary)' : 'var(--foreground)'} fillOpacity={index === 0 ? 1 : 0.12} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-center'>
          <p className='text-foreground text-2xl font-semibold'>72%</p>
          <span className='text-primary text-xs'>Completed</span>
        </div>
      </div>
    </div>
  )
}
