'use client'

import React from 'react'
import { Area, AreaChart, ResponsiveContainer,} from 'recharts'
import { FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'

const revenueData = [
  { month: 'Jan', value: 38500 },
  { month: 'Feb', value: 40200 },
  { month: 'Mar', value: 41800 },
  { month: 'Apr', value: 42100 },
  { month: 'May', value: 44900 },
  { month: 'Jun', value: 46200 },
  { month: 'Jul', value: 47000 },
  { month: 'Aug', value: 48500 },
]

export default function MonthlyRevenue() {
  return (
    <div className="relative isolate min-h-75 w-full overflow-hidden rounded-[28px] bg-primary p-6 flex items-center">
      <div className="absolute inset-0 -z-10 bg-black/70 pointer-events-none" />
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.07]"
        style={{backgroundImage: `linear-gradient( rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient( 90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: '48px 48px',}}/>
      <div className="relative z-10 flex w-full flex-col items-center gap-8 lg:flex-row">
        <div className="flex w-full flex-col items-start lg:w-[42%]">
          <p className="text-sm font-semibold text-white/80 sm:text-base">Monthly Recurring Revenue</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">$48,500</h2>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-white">
              <FiArrowUpRight size={15} />
              +$3,200
            </div>
            <span className="text-sm text-white/70">from last month</span>
          </div>
          <Link
            href='/admin/analytics' className="mt-6 flex items-center gap-2 rounded-xl bg-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/25">
            View Breakdown
            <FiArrowUpRight size={18} />
          </Link>
        </div>
        <div className="h-45 w-full sm:h-52.5 lg:h-55 lg:w-[58%]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 20, right: 10, left: 0, bottom: 0,}}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity={0.18}/>
                  <stop offset="100%" stopColor="#ffffff" stopOpacity={0.01}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="value" stroke="#ffffff" strokeWidth={2.5} fill="url(#revenueGradient)" dot={false} activeDot={{ r: 4, fill: '#ffffff', stroke: '#ffffff', }}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}