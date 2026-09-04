import React from 'react'
import { FiCheck, FiMail, FiMapPin, FiRefreshCw, FiShoppingBag, FiShoppingCart, FiStar, FiZap } from 'react-icons/fi'


const ResAct = [
    { name: 'Sarah Mitchell placed order #ORD-2026-001', time: '2 minutes ago', icon: FiShoppingBag },
    { name: 'James Chen updated shipping address', time: '15 minutes ago', icon: FiMapPin },
    { name: 'Emily Rodriguez left a 5-star review on Wireless Headphones', time: '32 minutes ago', icon: FiStar },
    { name: 'Michael Park added 3 items to cart', time: '1 hour ago', icon: FiShoppingCart },
    { name: 'Lisa Thompson requested a refund for order #ORD-2026-005', time: '2 hour ago', icon: FiRefreshCw },
    { name: 'David Kim subscribed to the newsletter', time: '3 hour ago', icon: FiMail },
    { name: 'Anna Weber completed onboarding', time: '4 hour ago', icon: FiCheck },
    { name: 'Robert Johnson upgraded to Pro plan', time: '5 hour ago', icon: FiZap }
]

export default function RecentAct() {
    return (
        <div className='w-full bg-surface p-5 rounded-2xl *:w-full'>
            <h2 className='text-md text-foreground border-b border-foreground/20 py-2'>Recent Activity</h2>
            <div>
                {ResAct.map((val, i) => {
                    const Icon = val.icon
                    return (
                        <div key={i} className='flex items-start gap-3 sm:gap-4 py-4'>
                            <div className='w-8 h-8 shrink-0 rounded-full bg-primary/20 flex items-center justify-center'>
                                <Icon size={14} className='text-primary' />
                            </div>
                            <div className='flex-1 min-w-0'>
                                <span className='text-foreground text-sm block wrap-break-word'>{val.name}</span>
                                <span className='text-foreground/50 text-xs block mt-1'>{val.time}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
