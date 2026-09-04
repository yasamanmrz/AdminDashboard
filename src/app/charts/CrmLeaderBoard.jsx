import React from 'react'

const data = [
    { rank: 'AR', name: 'Alex Rivera', sub: '18 deals closed', sale: '$142K', win: '38% win', progress: '48%' },
    { rank: 'SP', name: 'Sam Patel', sub: '15 deals closed', sale: '$118K', win: '34% win', progress: '44%' },
    { rank: 'JL', name: 'Jordan Lee', sub: '12 deals closed', sale: '$96K', win: '30% win', progress: '40%' },
    { rank: 'MD', name: 'Morgan Devi', sub: '8 deals closed', sale: '$64K', win: '28% win', progress: '38%' },
]

export default function CrmLeaderBoard() {
    return (
        <div className='w-full lg:w-1/2 bg-surface rounded-2xl p-4 sm:p-6'>
            <h2 className='text-xl sm:text-3xl text-foreground font-semibold'>Sales Team Leaderboard</h2>
            <div className='mt-5'>
                {data.map((item, index) => (
                    <div
                        key={item.rank}
                        className={`relative flex items-center justify-between py-4 ${index !== data.length - 1 ? 'border-b border-foreground/10' : ''}`}>
                        <div className='absolute inset-y-0 left-0 bg-primary/5' style={{ width: item.progress }} />
                        <div className='relative z-10 flex items-center gap-3 min-w-0 px-3'>
                            <div className='w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center'>
                                <span className='text-primary text-xs font-semibold'>{item.rank}</span>
                            </div>
                            <div className='min-w-0'>
                                <p className='text-foreground text-sm font-medium truncate'>{item.name}</p>
                                <span className='text-foreground/40 text-xs'>{item.sub}</span>
                            </div>
                        </div>
                        <div className='relative z-10 flex items-center gap-3 sm:gap-8 text-right'>
                            <div>
                                <p className='text-foreground text-sm font-semibold'>{item.sale}</p>
                                <span className='text-foreground/40 text-xs'>Sale</span>
                            </div>
                            <div className='min-w-15'>
                                <p className='text-primary text-sm font-semibold'>{item.win}</p>
                                <span className='text-foreground/40 text-xs'>Win</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}