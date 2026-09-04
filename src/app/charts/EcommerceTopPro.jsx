import React from 'react'
import { FiBox, FiStar } from 'react-icons/fi'


const data = [
    { icon: FiBox, title: 'Wireless Noise-Cancelling Headphones', sub: '342 units sold', rank: '$27.4K', rating: 5 },
    { icon: FiBox, title: 'Smart Fitness Watch Pro', sub: '278 units sold', rank: '$22.4K', rating: 4 },
    { icon: FiBox, title: 'Portable Bluetooth Speaker', sub: '215 units sold', rank: '$12.9K', rating: 3 },
    { icon: FiBox, title: 'USB-C Charging Hub', sub: '189 units sold', rank: '$9.4K', rating: 4 },
    { icon: FiBox, title: 'Ergonomic Mechanical Keyboard', sub: '156 units sold', rank: '$18.7K', rating: 3 },
]

export default function EcommerceTopPro() {
    return (
        <div className='w-full bg-surface p-4 sm:p-5 rounded-2xl'>
            <h2 className='text-xl sm:text-2xl text-foreground py-2'>Top Products</h2>
            <div className='mt-2 divide-y divide-foreground/20'>
                {data.map((val, i) => {
                    const Icon = val.icon
                    return (
                        <div key={i} className='flex items-center gap-4 py-3'>
                            <div className='w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center'>
                                <Icon size={18} className='text-primary' />
                            </div>
                            <div className='flex-1 min-w-0'>
                                <h3 className='text-foreground text-sm leading-5'>{val.title}</h3>
                                <p className='text-foreground/30 text-xs'>{val.sub}</p>
                            </div>
                            <div className='ml-auto text-right shrink-0'>
                               <p className='text-foreground text-sm'>{val.rank}</p>
                                <div className='flex justify-end gap-0.5 mt-1'>
                                    {[1,2,3,4,5].map((star)=>(
                                        <FiStar key={star} size={12}  className={
                                            star <= val.rating
                                                ? 'text-yellow-400 fill-yellow-400'
                                                : 'text-foreground/20'
                                        }/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
