import React from 'react'

const TopPro = [
    { rank: '#1', name: 'Wireless Noise-Cancelling Headphones', sales: '$27.4k', sold: '342 sold', progress: '100%' },
    { rank: '#2', name: 'Smart Fitness Watch Pro', sales: '$22.2k', sold: '278 sold', progress: '80%' },
    { rank: '#3', name: 'Portable Bluetooth Speaker', sales: '$12.9k', sold: '215 sold', progress: '60%' },
    { rank: '#4', name: 'USB-C Charging Hub', sales: '$9.4k', sold: '189 sold', progress: '50%' },
    { rank: '#5', name: 'Ergonomic Mechanical Keyboard', sales: '$18.7k', sold: '156 sold', progress: '65%' },
]

export default function TopProducts() {
    return (
        <div className='w-full bg-surface p-5 rounded-2xl *:w-full'>
            <h2 className='text-md text-foreground border-b border-foreground/20 py-2'>Top Products</h2>
            <div className='mt-2 divide-y divide-foreground/20'>
                {TopPro.map((val, index)=>(
                    <div key={index} className='flex items-start justify-between gap-3 py-4'>
                        <div className='w-8 shrink-0'>
                            <span className='w-8 h-8 bg-primary/20 rounded-full text-primary font-semibold flex items-center justify-center text-sm'>{val.rank}</span>
                        </div>
                        <div className='flex-1 min-w-0'>
                            <p className='text-foreground text-sm mb-2 wrap-break-word'>{val.name}</p>
                            <div className='w-full h-1.5 bg-foreground/20 rounded-full'>
                                <div className='h-full bg-primary rounded-full' style={{width:val.progress}}/>
                            </div>
                        </div>
                        <div className='w-auto shrink-0 text-right'>
                            <span className='block text-sm text-foreground'>{val.sales}</span>
                            <span className='block text-xs text-[#637284]'>{val.sold}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
