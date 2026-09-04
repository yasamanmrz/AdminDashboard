import React from 'react'

const data = [
    { rank: 'MS', name: 'Maria Santos', sub: 'maria@startup.io', sale: '12d left', win: 'Pro' },
    { rank: 'JW', name: 'Jake Wilson', sub: 'jake@techco.com', sale: '8d left', win: 'Enterprise' },
    { rank: 'SC', name: 'Sophie Chen', sub: 'sophie@design.co', sale: '5d left', win: 'Starter' },
    { rank: 'RB', name: 'Ryan Brooks', sub: 'ryan@agency.dev', sale: '2d left', win: 'Pro' },
    { rank: 'AL', name: 'Ana Lopez', sub: 'ana@fintech.io', sale: '1d left', win: 'Pro' },
]

export default function SaasRecentTrials() {
    return (
        <div className='w-full lg:w-1/2 bg-surface rounded-2xl p-4 sm:p-5'>
            <h2 className='text-xl sm:text-2xl lg:text-3xl text-foreground font-semibold'>Recent Trials</h2>
            <div className='mt-5'>
                {data.map((item, index) => (
                    <div key={item.rank} className={`relative flex items-center justify-between py-4 ${index !== data.length - 1 ? 'border-b border-foreground/10' : ''}`}>
                        <div className='relative z-10 flex items-center gap-2 sm:gap-3 min-w-0 px-1 sm:px-3'>
                            <div className='w-11 h-11 shrink-0 rounded-full bg-primary/10 flex items-center justify-center'>
                                <span className='text-primary text-xs font-semibold'>{item.rank}</span>
                            </div>
                            <div className='min-w-0'>
                                <p className='text-foreground text-sm sm:text-md font-medium truncate'>{item.name}</p>
                                <span className='text-foreground/70 text-sm block truncate'>{item.sub}</span>
                            </div>
                        </div>
                        <div className='relative z-10 flex items-center gap-2 sm:gap-3 text-right shrink-0'>
                            <div className='p-2 bg-primary/10 rounded-2xl'>
                                <p className='text-primary text-xs font-semibold'>{item.sale}</p>
                            </div>
                            <div className='p-2 bg-primary/10 rounded-2xl shrink-0'>
                                <p className='text-primary text-xs font-semibold'>{item.win}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}