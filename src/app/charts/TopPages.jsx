import React from 'react'

const TopPro = [
    { rank: '#1', name: '/', sales: '42.4k', sold: '31.2K unique', progress: '100%' },
    { rank: '#2', name: '/products', sales: '28.9k', sold: '21.4K unique', progress: '70%' },
    { rank: '#3', name: '/blog/getting-started-guide', sales: '18.4k', sold: '15.8K unique', progress: '50%' },
    { rank: '#4', name: '/pricing', sales: '15.6k', sold: '12.3K unique', progress: '45%' },
    { rank: '#5', name: '/about', sales: '12.8k', sold: '10.5K unique', progress: '40%' },
    { rank: '#6', name: '/blog/top-10-featurs', sales: '11.2k', sold: '9.8K unique', progress: '35%' },
]

export default function TopPages() {
    return (
        <div className='w-full lg:w-1/2 bg-surface p-4 sm:p-5 rounded-2xl *:w-full'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl text-foreground py-2'>Top Pages</h2>
            <div className='mt-2 divide-y divide-foreground/20'>
                {TopPro.map((val, index)=>(
                    <div key={index} className='flex items-center justify-between py-4'>
                        <div className='w-[10%]'>
                            <span className='w-8 h-8 rounded-full text-foreground/50 font-semibold flex items-center justify-center text-sm'>{val.rank}</span>
                        </div>
                        <div className='w-[70%] min-w-0'>
                            <p className='text-foreground text-sm mb-2 break-all'>{val.name}</p>
                            <div className='w-full h-1 bg-foreground/20 rounded-full'>
                                <div className='h-full bg-primary rounded-full' style={{width:val.progress}}/>
                            </div>
                        </div>
                        <div className='w-[20%] shrink-0 text-right'>
                            <span className='block text-sm text-foreground'>{val.sales}</span>
                            <span className='block text-xs text-[#637284] truncate'>{val.sold}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
