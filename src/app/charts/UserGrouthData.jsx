'use client'

import React from 'react'
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis,} from 'recharts'

const userGrowthData = [
    { month: 'Jan', newUsers: 65, churned: 28 },
    { month: 'Feb', newUsers: 70, churned: 27 },
    { month: 'Mar', newUsers: 78, churned: 25 },
    { month: 'Apr', newUsers: 67, churned: 29 },
    { month: 'May', newUsers: 76, churned: 24 },
    { month: 'Jun', newUsers: 71, churned: 27 },
    { month: 'Jul', newUsers: 79, churned: 22 },
    { month: 'Aug', newUsers: 67, churned: 28 },
    { month: 'Sep', newUsers: 72, churned: 24 },
    { month: 'Oct', newUsers: 65, churned: 26 },
    { month: 'Nov', newUsers: 55, churned: 31 },
    { month: 'Dec', newUsers: 58, churned: 27 },
  ]

export default function UserGrouthData() {
    return (
        <div className="w-full rounded-2xl bg-surface p-5 sm:p-6">
            <div>
                <h2 className="text-foreground text-xl sm:text-2xl font-semibold">User Growth</h2>
                <p className="mt-1 text-foreground/60 text-sm font-medium">New vs Churned</p>
            </div>
            <div className="mt-5 h-60 sm:h-75 w-full lg:h-82.5">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={userGrowthData} margin={{ top: 10, right: 5, left: -20, bottom: 0, }}>
                        <YAxis
                            domain={[-30, 90]}
                            ticks={[-30, 0, 30, 60, 90]}
                            tick={{ fill: 'currentColor', opacity: 0.55, fontSize: 11, }} tickLine={false} axisLine={false} />
                        <XAxis
                            dataKey="month"
                            tick={{ fill: 'currentColor', opacity: 0.55, fontSize: 10, }} tickLine={false} axisLine={false} dy={8} />
                        <Area type="monotone" dataKey="newUsers" stroke="#9AF06A" strokeWidth={2.5} fill="url(#newUsersGradient)" dot={false} activeDot={{ r: 4, fill: '#9AF06A', stroke: '#9AF06A', }} />
                        <Area type="monotone" dataKey="churned" stroke="#FF9B4A" strokeWidth={2.5} fill="url(#churnedGradient)" dot={false} activeDot={{ r: 4, fill: '#FF9B4A', stroke: '#FF9B4A', }} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2">
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#9AF06A]" />
                    <span className="text-foreground/70 text-xs sm:text-sm">New Users</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF9B4A]" />
                    <span className="text-foreground/70 text-xs sm:text-sm">Churned</span>
                </div>
            </div>
        </div>
    )
}