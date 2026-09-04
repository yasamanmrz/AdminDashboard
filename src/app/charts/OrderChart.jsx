'use client'

import React, { useState } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts'
import { FiArrowUpRight } from 'react-icons/fi'
import { useSettings } from '../components/setting/SettingProvider'

const statuses = [
    { name: 'Completed', color: '#22C55E' },
    { name: 'Processing', color: '#3B82F6' },
    { name: 'Pending', color: '#F59E0B' },
    { name: 'Cancelled', color: '#EF4444' },
]

const chartData = {
    Completed: [
        { day: 'Mon', value: 65 },
        { day: 'Tue', value: 82 },
        { day: 'Wed', value: 74 },
        { day: 'Thu', value: 91 },
        { day: 'Fri', value: 86 },
        { day: 'Sat', value: 58 },
        { day: 'Sun', value: 88 },
    ],
    Processing: [
        { day: 'Mon', value: 45 },
        { day: 'Tue', value: 58 },
        { day: 'Wed', value: 52 },
        { day: 'Thu', value: 67 },
        { day: 'Fri', value: 62 },
        { day: 'Sat', value: 48 },
        { day: 'Sun', value: 71 },
    ],
    Pending: [
        { day: 'Mon', value: 28 },
        { day: 'Tue', value: 42 },
        { day: 'Wed', value: 35 },
        { day: 'Thu', value: 51 },
        { day: 'Fri', value: 45 },
        { day: 'Sat', value: 31 },
        { day: 'Sun', value: 54 },
    ],
    Cancelled: [
        { day: 'Mon', value: 15 },
        { day: 'Tue', value: 22 },
        { day: 'Wed', value: 18 },
        { day: 'Thu', value: 27 },
        { day: 'Fri', value: 21 },
        { day: 'Sat', value: 12 },
        { day: 'Sun', value: 10 },
    ],
}

const statusInfo = {
    Completed: {
        count: 856,
        label: 'Completed orders',
        growth: '+8.2%'
    },
    Processing: {
        count: 245,
        label: 'Processing orders',
        growth: '+5.4%'
    },
    Pending: {
        count: 142,
        label: 'Pending orders',
        growth: '+7.3%'
    },
    Cancelled: {
        count: 41,
        label: 'Cancelled orders',
        growth: '+1.2%'
    },
}


export default function OrderChart() {

    const { primaryColor } = useSettings()

    const [activeStatus, setActiveStatus] = useState('Completed')

    const [hasSelectedStatus, setHasSelectedStatus]=useState(false)

    const activeData = chartData[activeStatus]

    const statusColor = statuses.find((val) => val.name === activeStatus)?.color

    const activeColor = hasSelectedStatus ? statusColor : primaryColor

    const activeInfo = statusInfo[activeStatus]

    return (
        <div>
            <div className='flex items-start justify-between'>
                <div>
                    <h2 className='text-foreground text-sm font-semibold'>Orders</h2>
                    <p className='text-foreground text-3xl font-semibold mt-2'>{activeInfo.count}</p>
                    <span className='text-[#637284] text-xs'>{activeInfo.label}</span>
                </div>
                <span className='text-xs font-medium flex items-center gap-1' style={{ color: activeColor }}><FiArrowUpRight size={14} />{activeInfo.growth}</span>
            </div>
            <div className='flex flex-wrap gap-2 items-center justify-center mt-5'>
                {statuses.map((val) => (
                    <button key={val.name} onClick={() => {setActiveStatus(val.name)
                     setHasSelectedStatus(true)}} className='flex items-center gap-2 px-2 py-2 rounded-full text-[10px] font-medium transition-all duration-200 touch-manipulation' style={{ backgroundColor: activeStatus === val.name ? `${val.color}25` : 'var(--surface)', color: activeStatus === val.name ? val.color : 'var(--foreground)', }}>
                        <span className='w-1.5 h-1.5 rounded-full' style={{ backgroundColor: val.color }} />
                        {val.name}
                    </button>
                ))}
            </div>
            <div className='w-full h-42 sm:h-45 mt-8 sm:mt-10 lg:mt-13'>
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart data={activeData}>
                        <XAxis dataKey='day' axisLine={false} tickLine={false} tick={{ fill: 'var(--foreground)', fontSize: 10 }} />
                        <Bar dataKey='value' fill={activeColor} radius={[5, 5, 0, 0]} barSize={24} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
