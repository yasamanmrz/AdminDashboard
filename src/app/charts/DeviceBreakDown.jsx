
'use client'
import React from 'react'
import { FiMonitor, FiSmartphone, FiTablet } from 'react-icons/fi'

import { PieChart, Pie, Cell, ResponsiveContainer, } from 'recharts'

const data = [
    { name: 'Desktop', value: 54 },
    { name: 'Mobile', value: 37 },
    { name: 'Tablet', value: 9 },
]

const COLORS = ['#00c49f', '#0088fe', '#ffbb28']

export default function DeviceBreakDown() {
    return (
        <div className='w-full lg:w-1/2 bg-surface rounded-2xl p-4 sm:p-5'>
            <div className='flex items-start justify-between'>
                <h2 className='text-foreground text-2xl font-semibold'>Device Breakdown</h2>
            </div>
            <div className='flex items-center gap-4 flex-col md:flex-row'>
                <div className="w-full sm:w-1/3 h-52 sm:h-60 shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={3}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]}/>
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className='flex flex-col gap-3 w-full sm:w-2/3 justify-center items-start'>
                    <div className='border border-foreground/20 rounded-xl w-full flex items-center gap-3 px-3 py-2'>
                        <div className='flex items-center justify-center w-8 shrink-0 text-primary'>
                            <FiMonitor size={18}/>
                        </div>
                        <div className='flex flex-col justify-start w-9/12'>
                            <h4 className='text-foreground text-md'>Desktop</h4>
                            <p className='text-foreground/50 text-xs'>48,200 sessions</p>
                        </div>
                        <div className='flex items-center justify-end shrink-0'>
                            <span className='text-foreground text-md'>54%</span>
                        </div>
                    </div>
                    <div className='border border-foreground/20 rounded-xl w-full flex items-center gap-3 px-3 py-2'>
                        <div className='flex items-center justify-center w-8 shrink-0 text-primary'>
                            <FiSmartphone size={18}/>
                        </div>
                        <div className='flex flex-col justify-center flex-1 min-w-0'>
                            <h4 className='text-foreground text-md'>Mobile</h4>
                            <p className='text-foreground/50 text-xs'>33,100 sessions</p>
                        </div>
                        <div className='flex items-center justify-end shrink-0'>
                            <span className='text-foreground text-md'>37%</span>
                        </div>
                    </div>
                    <div className='border border-foreground/20 rounded-xl w-full flex items-center gap-3 px-3 py-2'>
                        <div className='flex items-center justify-center w-8 shrink-0 text-primary'>
                            <FiTablet size={18}/>
                        </div>
                        <div className='flex flex-col justify-start w-9/12'>
                            <h4 className='text-foreground text-md'>Tablet</h4>
                            <p className='text-foreground/50 text-xs'>8,121 sessions</p>
                        </div>
                        <div className='flex items-center justify-end shrink-0'>
                            <span className='text-foreground text-md'>9%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
