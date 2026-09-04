'use client'

import React from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const lineChart = [
    { month: 'Jan', Expence: 2800, sale: 4200 },
    { month: 'Feb', Expence: 3200, sale: 5100 },
    { month: 'Mar', Expence: 4100, sale: 6300 },
    { month: 'Apr', Expence: 3800, sale: 5800 },
    { month: 'May', Expence: 4600, sale: 7200 },
    { month: 'Jun', Expence: 5200, sale: 8100 },
    { month: 'Jul', Expence: 4900, sale: 7600 },
    { month: 'Aug', Expence: 5800, sale: 8900 },
    { month: 'Sep', Expence: 6100, sale: 9200 },
    { month: 'Oct', Expence: 5500, sale: 8700 },
    { month: 'Dec', Expence: 7200, sale: 10500 },
]

const areaChart = [
    { month: 'Jan', Revenue: 12000 },
    { month: 'Feb', Revenue: 19000 },
    { month: 'Mar', Revenue: 24000 },
    { month: 'Apr', Revenue: 21000 },
    { month: 'May', Revenue: 32000 },
    { month: 'Jun', Revenue: 38000 },
    { month: 'Jul', Revenue: 34000 },
    { month: 'Aug', Revenue: 41000 },
    { month: 'Sep', Revenue: 46000 },
    { month: 'Oct', Revenue: 42000 },
    { month: 'Dec', Revenue: 52000 },
]

const barChart = [
    { month: 'Jan', Desktop: 700, Mobile: 350 },
    { month: 'Feb', Desktop: 850, Mobile: 420 },
    { month: 'Mar', Desktop: 620, Mobile: 480 },
    { month: 'Apr', Desktop: 900, Mobile: 380 },
    { month: 'May', Desktop: 780, Mobile: 550 },
    { month: 'Jun', Desktop: 950, Mobile: 620 },
    { month: 'Jul', Desktop: 820, Mobile: 500 },
    { month: 'Aug', Desktop: 1050, Mobile: 680 },
    { month: 'Sep', Desktop: 980, Mobile: 720 },
    { month: 'Oct', Desktop: 1100, Mobile: 650 },
    { month: 'Nov', Desktop: 1150, Mobile: 750 },
    { month: 'Dec', Desktop: 1200, Mobile: 800 },
]

const dataDon = [
    { name: 'Dsign', value: 2800 },
    { name: 'Development', value: 5200 },
    { name: 'Marketing', value: 3500 },
    { name: 'Sales', value: 4100 },
    { name: 'Support', value: 1900 },
]

const COLORS = ['#F59E0B', '#3B82F6', '#E56200', '#8B5CF6', '#EC4899']

const multiLine = [
    { month: 'Jan', conversion: 4200, pageViews: 12500, session: 7800 },
    { month: 'Feb', conversion: 5100, pageViews: 13800, session: 8500 },
    { month: 'Mar', conversion: 4800, pageViews: 14500, session: 9200 },
    { month: 'Apr', conversion: 6200, pageViews: 15200, session: 10100 },
    { month: 'May', conversion: 5800, pageViews: 16000, session: 11200 },
    { month: 'Jun', conversion: 7200, pageViews: 17200, session: 12400 },
    { month: 'Jul', conversion: 6800, pageViews: 16500, session: 11800 },
    { month: 'Aug', conversion: 8100, pageViews: 18000, session: 13200 },
    { month: 'Sep', conversion: 7600, pageViews: 18800, session: 14100 },
    { month: 'Oct', conversion: 8900, pageViews: 19400, session: 14800 },
    { month: 'Nov', conversion: 9400, pageViews: 18700, session: 15300 },
    { month: 'Dec', conversion: 10200, pageViews: 19800, session: 16100 },
]

export default function Charts() {
    return (
        <div className='w-full p-3 sm:p-5 overflow-x-hidden'>
            <div className='mb-5 sm:mb-8'>
                <h1 className='text-primary text-2xl font-semibold'>Charts</h1>
                <p className='text-foreground/50 text-sm'>recharts chart library showcase</p>
            </div>
            <div className='w-full grid grid-cols-1 gap-4 rounded-2xl overflow-hidden'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
                    <div className='bg-surface p-3 sm:p-5 rounded-xl w-full'>
                        <div className='mb-5 sm:mb-8'>
                            <h1 className='text-primary text-2xl font-semibold'>Line Chart</h1>
                            <p className='text-foreground/50 text-sm'>Monthly sales and expenses</p>
                        </div>
                        <div className='w-full h-75 sm:h-90'>
                            <ResponsiveContainer width='100%' height='100%'>
                                <LineChart data={lineChart} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                                    <CartesianGrid strokeDasharray='3 3' stroke='color-mix(in srgb, var(--foreground) 10%, transparent)' />
                                    <XAxis dataKey='month' tick={{ fill: 'color-mix(in srgb, var(--foreground) 55%, transparent)', fontSize: 12, }} axisLine={false} tickLine={false} />
                                    <YAxis domain={[0, 12000]} ticks={[0, 3000, 6000, 9000, 12000]} tickFormatter={(value) => `${value / 1000}K`} tick={{ fill: 'color-mix(in srgb, var(--foreground) 55%, transparent)', fontSize: 12, }} axisLine={false} tickLine={false} />
                                    <Tooltip contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'var(--foreground)', }} formatter={(value) => value.toLocaleString()} />
                                    <Legend />
                                    <Line type="monotone" dataKey="Expence" name="Expence" stroke="var(--primary)" strokeWidth={3} dot={false} activeDot={{ r: 5 }} />
                                    <Line type="monotone" dataKey="sale" name="Sale" stroke="#8B5CF6" strokeWidth={3} dot={false} activeDot={{ r: 5 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    {/* /////// */}
                    <div className='bg-surface p-3 sm:p-5 rounded-xl w-full'>
                        <div className='mb-5 sm:mb-8'>
                            <h1 className='text-primary text-2xl font-semibold'>Area Chart</h1>
                            <p className='text-foreground/50 text-sm'>Revenue trend over 12 months</p>
                        </div>
                        <div className='w-full h-75 sm:h-90'>
                            <ResponsiveContainer width='100%' height='100%'>
                                <AreaChart data={areaChart} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                                    <defs>
                                        <linearGradient id='revenueGradient' x1='0' y1='0' x2='0' y2='1'>
                                            <stop offset='0%' stopColor='var(--primary)' stopOpacity={0.35} />
                                            <stop offset='100%' stopColor='var(--primary)' stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid vertical={false} strokeDasharray='3 3' stroke='color-mix(in srgb, var(--foreground) 10%, transparent)' />
                                    <XAxis dataKey='month' tick={{ fill: 'color-mix(in srgb, var(--foreground) 55%, transparent)', fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <YAxis domain={[0, 60000]} ticks={[0, 15000, 30000, 45000, 60000]} tickFormatter={(value) => `${value / 1000}K`} tick={{ fill: 'color-mix(in srgb, var(--foreground) 55%, transparent)', fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <Tooltip contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'var(--foreground)' }} formatter={(value) => value.toLocaleString()} />
                                    <Area type='monotone' dataKey='Revenue' stroke='var(--primary)' strokeWidth={3} fill='url(#revenueGradient)' dot={false} activeDot={{ r: 5 }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                {/* //////////////////////////////////////////////////////////////////// */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
                    <div className='bg-surface p-5 rounded-xl w-full'>
                        <div className='mb-5 sm:mb-8'>
                            <h1 className='text-primary text-2xl font-semibold'>Bar Chart</h1>
                            <p className='text-foreground/50 text-sm'>Monthly visitors</p>
                        </div>
                        <div className='w-full h-75 sm:h-90'>
                            <ResponsiveContainer width='100%' height='100%'>
                                <BarChart data={lineChart} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                                    <CartesianGrid vertical={false} strokeDasharray='3 3' stroke='color-mix(in srgb, var(--foreground) 10%, transparent)' />
                                    <XAxis dataKey='month' tick={{ fill: 'color-mix(in srgb, var(--foreground) 55%, transparent)', fontSize: 12, }} axisLine={false} tickLine={false} />
                                    <YAxis domain={[0, 12000]} ticks={[0, 3000, 6000, 9000, 12000]} tickFormatter={(value) => `${value / 1000}K`} tick={{ fill: 'color-mix(in srgb, var(--foreground) 55%, transparent)', fontSize: 12, }} axisLine={false} tickLine={false} />
                                    <Tooltip cursor={false} contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'var(--foreground)', }} formatter={(value) => value.toLocaleString()} />
                                    <Bar dataKey="sale" fill='var(--primary)' radius={[8, 8, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    {/* ////// */}
                    <div className='bg-surface p-5 rounded-xl w-full'>
                        <div className='mb-5 sm:mb-8'>
                            <h1 className='text-primary text-2xl font-semibold'>Stacked Bar Chart</h1>
                            <p className='text-foreground/50 text-sm'>Desktop and mobile users</p>
                        </div>
                        <div className='w-full h-75 sm:h-90'>
                            <ResponsiveContainer width='100%' height='100%'>
                                <BarChart data={barChart} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                                    <CartesianGrid vertical={false} strokeDasharray='3 3' stroke='color-mix(in srgb, var(--foreground) 10%, transparent)' />
                                    <XAxis dataKey='month' tick={{ fill: 'color-mix(in srgb, var(--foreground) 55%, transparent)', fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <YAxis domain={[0, 1800]} ticks={[0, 450, 900, 1350, 1800]} tickFormatter={(value) => value} tick={{ fill: 'color-mix(in srgb, var(--foreground) 55%, transparent)', fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <Tooltip cursor={false} contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'var(--foreground)' }} formatter={(value) => value.toLocaleString()} />
                                    <Legend verticalAlign='bottom' align='center' iconType='circle' wrapperStyle={{ paddingTop: '10px', color: 'var(--foreground)' }} />
                                    <Bar dataKey='Desktop' name='Desktop' stackId='total' fill='var(--primary)' />
                                    <Bar dataKey='Mobile' name='Mobile' stackId='total' fill='#8B5CF6' radius={[8, 8, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                {/* ////////////////////////////////////////////////////////////////////////// */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
                    <div className='bg-surface p-5 rounded-xl w-full'>
                        <div className='mb-5 sm:mb-8'>
                            <h1 className='text-primary text-2xl font-semibold'>Donut Chart</h1>
                            <p className='text-foreground/50 text-sm'>Budget allocation by department</p>
                        </div>
                        <div className='w-full h-85 sm:h-90'>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Tooltip contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'var(--foreground)' }} formatter={(value, name) => [value.toLocaleString(), name]} />
                                    <Legend verticalAlign='bottom' align='center' iconType='circle' wrapperStyle={{ paddingTop: '10px', color: 'var(--foreground)' }} />
                                    <Pie data={dataDon} dataKey="value" cx="50%" cy="45%" innerRadius={70} outerRadius={120} paddingAngle={3}>
                                        {dataDon.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    {/* /////// */}
                    <div className='bg-surface p-5 rounded-xl w-full'>
                        <div className='mb-5 sm:mb-8'>
                            <h1 className='text-primary text-2xl font-semibold'>Multi-Line Chart</h1>
                            <p className='text-foreground/50 text-sm'>Three metrics compared over time</p>
                        </div>
                        <div className='w-full h-75 sm:h-90'>
                            <ResponsiveContainer width='100%' height='100%'>
                                <LineChart data={multiLine} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                                    <CartesianGrid vertical={false} strokeDasharray='3 3' stroke='color-mix(in srgb, var(--foreground) 10%, transparent)' />
                                    <XAxis dataKey='month' tick={{ fill: 'color-mix(in srgb, var(--foreground) 55%, transparent)', fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <YAxis domain={[0, 20000]} ticks={[0, 5000, 10000, 15000, 20000]} tickFormatter={(value) => { if (value === 0) return '0'
                                     return `${value / 1000}k` }} tick={{ fill: 'color-mix(in srgb, var(--foreground) 55%, transparent)', fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <Tooltip cursor={false} contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'var(--foreground)' }} formatter={(value) => value.toLocaleString()} />
                                    <Legend verticalAlign='bottom' align='center' iconType='circle' wrapperStyle={{ paddingTop: '10px', color: 'var(--foreground)' }} />
                                    <Line type='monotone' dataKey='conversion' name='Conversion' stroke='var(--primary)' strokeWidth={3} dot={false} activeDot={{ r: 5 }} />
                                    <Line type='monotone' dataKey='pageViews' name='Page Views' stroke='#3B82F6' strokeWidth={3} dot={false} activeDot={{ r: 5 }} />
                                    <Line type='monotone' dataKey='session' name='Session' stroke='#FACC15' strokeWidth={3} dot={false} activeDot={{ r: 5 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
