import React from 'react'


const data = [
    { order: 'ORD-2026-001', customerid: 'SM', customer: 'Sarah Mitchell', status: 'completed', total: '$284.50', date: 'Mar 28' },
    { order: 'ORD-2026-002', customerid: 'JC', customer: 'James Chen', status: 'processing', total: '$159.00', date: 'Mar 28' },
    { order: 'ORD-2026-003', customerid: 'ER', customer: 'Emily Rodriguez', status: 'pending', total: '$432.75', date: 'Mar 27' },
    { order: 'ORD-2026-004', customerid: 'MP', customer: 'Michael Park', status: 'completed', total: '$98.20', date: 'Mar 27' },
    { order: 'ORD-2026-005', customerid: 'LT', customer: 'Lisa Thompson', status: 'completed', total: '$567.00', date: 'Mar 26' },
    { order: 'ORD-2026-006', customerid: 'DK', customer: 'David Kim', status: 'cancelled', total: '$215.30', date: 'Mar 26' },
]

export default function EcommerceRecentOrders() {
    return (
        <div className='w-full bg-surface p-4 sm:p-6 rounded-2xl'>
            <h2 className='text-xl sm:text-3xl text-foreground py-2'>Recent Orders</h2>
            <div className='mt-4 overflow-x-auto'>
               <div className='min-w-175'>
               <div className='grid grid-cols-[1.1fr_1fr_1fr_1fr_auto] gap-4 px-2 py-3 border-b border-foreground/20'>
                    <p className='text-foreground/40 text-sm'>Order</p>
                    <p className='text-foreground/40 text-sm'>Customer</p>
                    <p className='text-foreground/40 text-sm'>Status</p>
                    <p className='text-foreground/40 text-sm'>Total</p>
                    <p className='text-foreground/40 text-sm'>Date</p>
                </div>
               </div>
                <div className='divide-y divide-foreground/10'>
                    {data.map((val, i) => {
                        return (
                            <div key={i} className='grid grid-cols-[1.1fr_1fr_1fr_1fr_auto] gap-4 items-center px-2 py-4'>
                                <p className='text-foreground/90 text-sm'>{val.order}</p>
                                <div className='flex items-center gap-2 min-w-0'>
                                    <div className='w-8 h-8 shrink-0 bg-primary/5 rounded-full flex items-center justify-center'><span className='text-primary text-xs'>{val.customerid}</span></div>
                                    <p className='text-sm text-foreground/80 truncate'>{val.customer}</p>
                                </div>
                                <div className='bg-primary/5 w-20 h-7 flex items-center justify-center rounded-3xl'>
                                    <span className='text-primary text-xs'>{val.status}</span>
                                </div>
                                <p className='text-sm text-foreground'>{val.total}</p>
                                <p className='text-sm text-foreground'>{val.date}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
