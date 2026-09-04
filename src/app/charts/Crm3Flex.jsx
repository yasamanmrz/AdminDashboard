'use client'

import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'



const data = [
    { day: "01", value: 20400 },
    { day: "03", value: 24300 },
    { day: "05", value: 25100 },
    { day: "07", value: 30100 },
    { day: "09", value: 22850 },
    { day: "11", value: 34500 },
    { day: "13", value: 36900 },
    { day: "15", value: 38550 },
]


export default function Crm3Flex() {
    return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div className='min-h-55 flex flex-col justify-center items-center bg-surface p-4 sm:p-6 rounded-2xl'>
                <div className='w-full h-28 flex justify-center items-center'>
                    <svg viewBox='0 0 200 110' className='w-full h-full max-w-60'>
                        <path d='M 20 100 A 80 80 0 0 1 180 100' fill='none' stroke='var(--foreground)' strokeOpacity='0.12' strokeWidth='16' />
                        <path d='M 20 100 A 80 80 0 0 1 180 100' fill='none' stroke='var(--primary)' strokeWidth='16' strokeLinecap='butt' pathLength='100' strokeDasharray='32 68' />
                        <line x1='100' y1='100' x2='62' y2='52' stroke='var(--primary)' strokeWidth='3' strokeLinecap='round' />
                        <circle cx='100' cy='100' r='4' fill='var(--primary)' />
                    </svg>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <p className='text-foreground text-2xl font-semibold leading-none'>32%</p>
                    <h3 className='text-foreground/40 text-xs'>Win Rate</h3>
                    <span className='text-primary text-xs'>+2.3% from last month</span>
                </div>
            </div>
            {/* ////////////////////////////////////// */}
            <div className='min-h-55 flex flex-col justify-center items-center gap-2 bg-surface p-4 sm:p-6 rounded-2xl'>
                <div className='w-16 h-16 rounded-2xl flex justify-center items-center bg-primary/10'>
                    <FiHeart className='text-primary' size={30} />
                </div>
               <div className='flex flex-col gap-1 items-center'>
               <p className='text-foreground text-2xl font-semibold leading-none'>48%</p>
                <h3 className='text-foreground/40 text-xs'>Deals This Month</h3>
                <span className='text-primary text-xs'>+12.0% vs last month</span>
               </div>
            </div>
            {/* ////////////////////////////////// */}
            <div className='min-h-55 flex flex-col bg-surface p-4 sm:p-6 rounded-2xl'>
                <h3 className='text-foreground/40 text-sm'>Pageviews</h3>
                <p className='text-foreground text-2xl font-semibold mt-1'>56.8K</p>
                <span className='text-primary text-xs'>+14.2% vs last period</span>
                <div className='w-full h-14 mt-auto'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                            <Area type="monotone" dataKey="value" baseValue="dataMin" stroke="var(--primary)" strokeWidth={2} fill="url(#revenueGradient)" dot={false} isAnimationActive={true} animationDuration={1800} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
