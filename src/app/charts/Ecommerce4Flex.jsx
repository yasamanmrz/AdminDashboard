import React from 'react'
import { FiCheckCircle, FiClock, FiLoader, FiTruck } from 'react-icons/fi'

const data = [
    { icon: FiClock, num: '24', status: 'Pending' },
    { icon: FiLoader, num: '18', status: 'Processing' },
    { icon: FiTruck, num: '156', status: 'Shipped' },
    { icon: FiCheckCircle, num: '1086', status: 'Delivered' },
]

export default function Ecommerce4Flex() {
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4'>
            {data.map((val, i) => {
                const Icon = val.icon
                return (
                    <div key={i} className='flex flex-col bg-surface rounded-2xl p-4'>
                        <div className='w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center'>
                            <Icon size={22} className='text-primary'/>
                        </div>
                        <p className='text-foreground text-2xl font-semibold my-2 tracking-wider'>{val.num}</p>
                        <p className='text-sm text-foreground/50'>{val.status}</p>
                    </div>
                )
            })}
        </div>
    )
}
