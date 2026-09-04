'use client'

import React from 'react'
import { FiCalendar, FiClipboard, FiClock, FiPhoneCall, FiSmartphone, FiTrendingDown, FiTrendingUp } from 'react-icons/fi'
import { Area, AreaChart, Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, XAxis } from 'recharts'


const data = [
    { day: "01", value: 34550 },
    { day: "03", value: 32560 },
    { day: "05", value: 30880 },
    { day: "07", value: 29500 },
    { day: "09", value: 28200 },
    { day: "11", value: 27000 },
    { day: "13", value: 26000 },
    { day: "15", value: 25500 },
]

const dataPie = [
    { name: 'filled', value: 43 },
    { name: 'empty', value: 57 },
]
const dataClock = [
    { name: 'completed', value: 70 },
    { name: 'remaining', value: 30 },
]

export default function Saas4Flex() {
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 *:rounded-2xl *:p-4'>
            <div className='flex flex-col bg-surface gap-1'>
                <h3 className='text-foreground/40 text-md'>Annual Recurring Revenue</h3>
                <p className='text-foreground text-3xl font-semibold'>$582K</p>
               <div className='bg-foreground/10 p-2 rounded-xl flex gap-2 items-center min-w-0'>
                  <FiClipboard className='text-foreground/50' size={14}/><span className='text-foreground/50 text-xs truncate'>MRR x 12</span>
               </div>
            </div>
            {/* ////////////////////////////////////// */}
            <div className='flex flex-col bg-surface gap-1'>
                <h3 className='text-foreground/40 text-md'>Active Subscriptions</h3>
                <p className='text-foreground text-3xl font-semibold'>1,247</p>
                <span className='text-primary text-xs'>+4.8% vs last period</span>
                <div className='w-full mt-1'>
                    <div className='w-full h-2 rounded-full overflow-hidden flex'>
                        <div className='h-full w-[30%] bg-blue-500'></div>
                        <div className='h-full w-[50%] bg-violet-500'></div>
                        <div className='h-full w-[20%] bg-orange-500'></div>
                    </div>
                </div>
                <div className=' flex-wrap items-center gap-x-3 gap-y-2 mt-2'>
                    <div className='flex items-center gap-1.5 min-w-0'>
                        <span className='w-2 h-2 rounded-full bg-blue-500'></span>
                        <span className='text-foreground/50 text-xs truncate'>Starter</span>
                    </div>
                    <div className='flex items-center gap-1.5 min-w-0'>
                        <span className='w-2 h-2 rounded-full bg-violet-500'></span>
                        <span className='text-foreground/50 text-xs truncate'>Pro</span>
                    </div>
                    <div className='flex items-center gap-1.5 min-w-0'>
                        <span className='w-2 h-2 rounded-full bg-orange-500'></span>
                        <span className='text-foreground/50 text-xs truncate'>Enterprise</span>
                    </div>
                </div>
            </div>
            {/* ////////////////////////////////// */}
            <div className='flex flex-col bg-surface'>
                <h3 className='text-foreground/40 text-md'>Churn Rate</h3>
                <div className='flex items-center justify-start gap-1 min-w-0 flex-wrap'>
                    <p className='text-foreground text-2xl sm:text-3xl font-semibold flex gap-1'>2.8%</p>
                    <FiTrendingDown size={18} className='text-primary' />
                    <span className='text-primary text-xs'>0.5%</span>
                </div>
                <span className='text-foreground text-sm truncate'>Last 30 days</span>
                <div className='w-full h-12 sm:h-10'>
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
            {/* ///////////////////////// */}
            <div className='flex flex-col bg-surface gap-1'>
                <h3 className='text-foreground/40 text-md'>Customer LTV</h3>
                <p className='text-foreground text-3xl font-semibold'>$1,840</p>
                <span className='text-primary text-xs flex gap-1 items-center'><FiTrendingUp size={18} />Trending upward</span>
            </div>
        </div>
    )
}
