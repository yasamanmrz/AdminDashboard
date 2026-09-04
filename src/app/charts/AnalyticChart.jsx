'use client'
import React, { useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const analyticsData = {
    '7 Day': [
        { day: 'Day 1', pageViews: 4200, uniqueVisitors: 2500 },
        { day: 'Day 2', pageViews: 5200, uniqueVisitors: 3100 },
        { day: 'Day 3', pageViews: 4700, uniqueVisitors: 2900 },
        { day: 'Day 4', pageViews: 6800, uniqueVisitors: 3900 },
        { day: 'Day 5', pageViews: 6200, uniqueVisitors: 3500 },
        { day: 'Day 6', pageViews: 8200, uniqueVisitors: 4800 },
        { day: 'Day 7', pageViews: 7600, uniqueVisitors: 5500 },
    ],
    '30 Day': [
        { day: 'Day 1', pageViews: 4200, uniqueVisitors: 4500 },
        { day: 'Day 5', pageViews: 4700, uniqueVisitors: 6300 },
        { day: 'Day 10', pageViews: 6800, uniqueVisitors: 5900 },
        { day: 'Day 15', pageViews: 6200, uniqueVisitors: 6800 },
        { day: 'Day 20', pageViews: 8500, uniqueVisitors: 6400 },
        { day: 'Day 25', pageViews: 11200, uniqueVisitors: 7200 },
        { day: 'Day 30', pageViews: 10800, uniqueVisitors: 7600 },
    ],
    '90 Day': [
        { day: 'Day 1', pageViews: 4200, uniqueVisitors: 2500 },
        { day: 'Day 10', pageViews: 5200, uniqueVisitors: 3100 },
        { day: 'Day 20', pageViews: 6100, uniqueVisitors: 3700 },
        { day: 'Day 30', pageViews: 7200, uniqueVisitors: 4200 },
        { day: 'Day 40', pageViews: 6800, uniqueVisitors: 4100 },
        { day: 'Day 50', pageViews: 8200, uniqueVisitors: 5000 },
        { day: 'Day 60', pageViews: 9100, uniqueVisitors: 5600 },
        { day: 'Day 70', pageViews: 8600, uniqueVisitors: 5600 },
        { day: 'Day 80', pageViews: 10500, uniqueVisitors: 6700 },
        { day: 'Day 90', pageViews: 11600, uniqueVisitors: 7400 },
    ],
}

export default function AnalyticChart() {

    const [range, setRange] = useState('7 Day')
    const data = analyticsData[range]

    return (
        <div>
            <div className='flex flex-col md:flex-row gap-4 md:items-center md:justify-between'>
                <div>
                    <h1 className='text-primary text-2xl font-semibold'>Analytics</h1>
                    <p className='text-foreground/60 text-sm mt-1'>Website traffic and user behavior insights</p>
                </div>
                <div className='flex gap-1.5 sm:gap-2 bg-background/50 p-1 rounded-xl w-fit max-w-full'>
                    {['7 Day', '30 Day', '90 Day'].map((val) => {
                        return (
                            <button key={val} onClick={() => setRange(val)} className={`min-h-10 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 touch-manipulation ${range === val ? 'bg-primary text-foreground' :'text-foreground/60'}`}>
                                {val}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className='mt-6 rounded-2xl bg-surface p-4 sm:p-6'>
                <div className='h-56 sm:h-64 md:h-72 w-full touch-pan-y'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                            <CartesianGrid strokeDasharray='3 3'  stroke='color-mix(in srgb, var(--foreground) 10%, transparent)' />
                            <XAxis dataKey='day' tick={{ fill:'color-mix(in srgb, var(--foreground) 55%, transparent)', fontSize: 12, }} axisLine={false} tickLine={false} />
                            <YAxis domain={[0, 12000]} ticks={[0, 3000, 6000, 9000, 12000]} tickFormatter={(value) => `${value / 1000}K`} tick={{ fill:'color-mix(in srgb, var(--foreground) 55%, transparent)', fontSize: 12, }} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'var(--foreground)', }} formatter={(value) => typeof value === 'number' ?value.toLocaleString():value} />
                            <Legend />
                            <Line type="monotone" dataKey="pageViews" name="Page Views" stroke="var(--primary)" strokeWidth={3} dot={false} activeDot={{ r: 5 }} />
                            <Line type="monotone" dataKey="uniqueVisitors" name="Unique Visitors" stroke="var(--foreground)" strokeWidth={3} dot={false} activeDot={{ r: 5 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
