'use client'

import React from 'react'
import { FiClock } from 'react-icons/fi'
import { Area, AreaChart, Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, XAxis } from 'recharts'


const data = [
    { day: "01", value: 22400 },
    { day: "03", value: 28300 },
    { day: "05", value: 25100 },
    { day: "07", value: 30100 },
    { day: "09", value: 22850 },
    { day: "11", value: 32500 },
    { day: "13", value: 34900 },
    { day: "15", value: 34550 },
]

const dataPie = [
    { name: 'filled', value: 43 },
    { name: 'empty', value: 57 },
]
const dataClock = [
    { name: 'completed', value: 70 },
    { name: 'remaining', value: 30 },
]

export default function Analytic4Flex() {
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 *:rounded-2xl *:p-4'>
            <div className='flex flex-col bg-surface'>
                <h3 className='text-foreground/40 text-sm'>Pageviews</h3>
                <p className='text-foreground text-2xl font-semibold'>56.8K</p>
                <span className='text-primary text-xs'>+14.2% vs last period</span>
                <div className='w-full h-10'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.22} />
                                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="value" baseValue="dataMin" stroke="var(--primary)" strokeWidth={2} fill="url(#revenueGradient)" dot={false} isAnimationActive={true} animationDuration={1800} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            {/* ////////////////////////////////////// */}
            <div className='flex flex-col bg-surface gap-2'>
                <h3 className='text-foreground/40 text-sm'>Bounce Rate</h3>
                <div className='flex items-center gap-3 sm:gap-6'>
                    <div className="relative w-30 h-14 shrink-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={dataPie} cx="50%" cy="100%" startAngle={180} endAngle={0} innerRadius={28} outerRadius={42} dataKey="value" stroke="none">
                                    <Cell fill="#F49E0B" />
                                    <Cell fill="color-mix(in srgb, var(--foreground) 10%, transparent)" />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-2xl text-foreground font-semibold leading-none'>42.3%</p>
                        <p className='text-xs text-primary'>-2.1%</p>
                    </div>
                </div>
            </div>
            {/* ////////////////////////////////// */}
            <div className='flex flex-col bg-surface gap-2'>
                <h3 className='text-foreground/40 text-sm'>Avg. Duration</h3>
                <div className='flex items-center gap-3 sm:gap-6'>
                    <div className="relative w-30 h-17 shrink-0">
                        <ResponsiveContainer width='100%' height='100%'>
                            <PieChart>
                                <Pie data={dataClock} cx='50%' cy='50%' startAngle={90} endAngle={-270} innerRadius={25} outerRadius={30} dataKey='value' stroke='none'>
                                    <Cell fill='#8B5CF5' />
                                    <Cell fill='color-mix(in srgb, var(--foreground) 10%, transparent)' />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <FiClock className='text-[#8B5CF5]' size={24} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-2xl text-foreground font-semibold leading-none'>3m 28s</p>
                        <p className='text-xs text-primary'>+5.6%</p>
                    </div>
                </div>
            </div>
            {/* ///////////////////////// */}
            <div className='flex flex-col bg-surface'>
                <h3 className='text-foreground/40 text-sm'>Sessions</h3>
                <p className='text-foreground text-2xl font-semibold'>89,421</p>
                <span className='text-primary text-xs'>+9.8% vs last period</span>
                <div className='w-full h-10'>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart data={data}>
                        <Bar dataKey='value' fill='var(--primary)' radius={[5, 5, 0, 0]} barSize={26} />
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
