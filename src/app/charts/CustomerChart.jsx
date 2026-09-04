'use client'

import React, { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Area, AreaChart, ResponsiveContainer, XAxis } from 'recharts'
import { useSettings } from '../components/setting/SettingProvider'

const statuses = [
    { name: 'Returning', color: '#22C55E' },
    { name: 'New', color: '#3B82F6' },
    { name: 'Inactive', color: '#F59E0B' },
]

const chartData = {
    Returning: [
        { month: 'Jan', value: '18' },
        { month: 'Feb', value: '22' },
        { month: 'Mar', value: '20' },
        { month: 'Apr', value: '28' },
        { month: 'May', value: '26' },
        { month: 'Jun', value: '35' },
    ],
    New: [
        { month: 'Jan', value: '5' },
        { month: 'Feb', value: '10' },
        { month: 'Mar', value: '20' },
        { month: 'Apr', value: '15' },
        { month: 'May', value: '28' },
        { month: 'Jun', value: '22' },
    ],
    Inactive: [
        { month: 'Jan', value: '9' },
        { month: 'Feb', value: '12' },
        { month: 'Mar', value: '8' },
        { month: 'Apr', value: '15' },
        { month: 'May', value: '19' },
        { month: 'Jun', value: '24' },
    ],

}

const statusInfo = {
    Returning: {
        count: 512,
        label: 'Returnin customers',
        growth: '+5.1%',
    },
    New: {
        count: 248,
        label: 'New customers',
        growth: '+6.2%',
    },
    Inactive: {
        count: 512,
        label: 'Inactive customers',
        growth: '+1.2%',
    }
}


export default function CustomerChart() {

    const { primaryColor } = useSettings()

    const [activeStatus, setActiveStatus] = useState('Returning')

    const [hasSelectedStatus, setHasSelectedStatus] = useState(false)

    const statusColor = statuses.find((val) => val.name === activeStatus)?.color

    const activeColor = hasSelectedStatus ? statusColor : primaryColor

    const activeInfo = statusInfo[activeStatus]

    return (
        <div>
            <div className='flex items-start justify-between'>
                <div>
                    <h2 className='text-foreground text-sm font-semibold'>Customers</h2>
                    <p className='text-foreground text-3xl font-semibold mt-2'>{activeInfo.count}</p>
                    <span className='text-[#637284] text-xs'>{activeInfo.label}</span>
                </div>
                <span className='text-xs font-medium flex items-center gap-1' style={{ color: activeColor }}><FiArrowUpRight size={14} />{activeInfo.growth}</span>
            </div>
            <div className='flex flex-wrap gap-2 items-center justify-start mt-5'>
                {statuses.map((val) => (
                    <button key={val.name} onClick={() =>{ setActiveStatus(val.name), setHasSelectedStatus(true)}} className='flex items-center gap-2 px-3 py-2 rounded-full text-[10px] font-medium transition-all duration-200 touch-manipulation' style={{ backgroundColor: activeStatus === val.name ? `${val.color}25` : 'var(--surface)', color: activeStatus === val.name ? val.color : 'var(--foreground)', }}>
                        <span className='w-1.5 h-1.5 rounded-full' style={{ backgroundColor: val.color }} />
                        {val.name}
                    </button>
                ))}
            </div>
            <div className='w-full h-42 sm:h-45 mt-8 sm:mt-10 lg:mt-12'>
                <ResponsiveContainer width='100%' height='100%'>
                    <AreaChart data={chartData[activeStatus]} margin={{ top: 10, left: 0, right: 0, bottom: 0 }}>
                        <XAxis dataKey='month' axisLine={false} tickLine={false} tick={{ fill: 'var(--foreground)', fontSize: 10 }} padding={{ left: 10, right: 10 }} />
                        <Area type="monotone" dataKey="value" baseValue="dataMin" stroke={activeColor} strokeWidth={2} fill="none" dot={false} isAnimationActive={true} animationDuration={1800} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
