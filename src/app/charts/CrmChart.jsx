import React from 'react'

const pipeline = [
    { title: 'Lead', amount: '$320K', deals: '45 deals', bg: 'bg-primary/10', },
    { title: 'Qualified', amount: '$280K', deals: '28 deals', bg: 'bg-primary/20', },
    { title: 'Proposal', amount: '$245K', deals: '18 deals', bg: 'bg-primary/40', },
    { title: 'Negotiation', amount: '$180K', deals: '12 deals', bg: 'bg-primary/60', },
    { title: 'Won', amount: '$220K', deals: '8 deals', bg: 'bg-primary/80', },
]

export default function CrmChart() {
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-4 sm:items-center sm:justify-between'>
                <div>
                    <h1 className='text-primary text-2xl font-semibold'>CRM</h1>
                    <p className='text-foreground/60 text-sm mt-1'>Sales pipeline and deal tracking</p>
                </div>
            </div>
            <div className='mt-6 rounded-2xl bg-surface px-4 py-3 sm:p-6'>
                <h4 className='text-foreground/50 text-sm mb-4'>Sales Pipeline</h4>
                <div className='flex flex-col md:flex-row gap-2'>
                    {pipeline.map((item, index) => (
                        <div key={item.title} className={`relative flex-1 min-w-32.5 lg:min-w-0 h-28 rounded-xl ${item.bg} flex flex-col justify-center items-center`}>
                            <p className='text-xs text-foreground/60'>{item.title}</p>
                            <p className='text-2xl font-semibold text-foreground mt-1'>{item.amount}</p>
                            <p className='text-xs text-foreground/50 mt-1'>{item.deals}</p>
                            {index !== pipeline.length - 1 && (
                                <span className='absolute z-10 -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface flex items-center justify-center text-foreground/70 text-lg'>›</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}