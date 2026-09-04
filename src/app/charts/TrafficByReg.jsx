import React from 'react'

const TopReg = [
    { nn: 'US', city: 'United State', view: '32,400', progress: '100%' },
    { nn: 'GB', city: 'United Kingdom', view: '12,800', progress: '70%' },
    { nn: 'DE', city: 'Germany', view: '9,600', progress: '50%' },
    { nn: 'CA', city: 'Canada', view: '7,200', progress: '45%' },
    { nn: 'FR', city: 'France', view: '5,400', progress: '40%' },
    { nn: 'AU', city: 'Australia', view: '4,800', progress: '35%' },
    { nn: 'JP', city: 'Japan', view: '3,600', progress: '35%' },
    { nn: 'BR', city: 'Brazil', view: '2,800', progress: '30%' },
]

export default function TrafficByReg() {
    return (
        <div className='w-full lg:w-1/2 bg-surface p-4 sm:p-5 rounded-2xl *:w-full'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl text-foreground py-2'>Traffic by Region</h2>
            <div className='mt-2 divide-y divide-foreground/20'>
                {TopReg.map((val, index)=>(
                    <div key={index} className='flex items-center gap-2 sm:gap-4 py-2'>
                        <div className='flex gap-2 items-center flex-1 min-w-0'>
                            <p className='w-8 h-8 rounded-full text-foreground/50 font-semibold flex items-center justify-center text-xs'>{val.nn}</p>
                            <span className='text-foreground text-sm truncate'>{val.city}</span>
                        </div>
                        <div className='w-[18%] sm:w-[20%] shrink-0'>
                            <div className='w-full h-1 bg-foreground/20 rounded-full'>
                                <div className='h-full bg-primary rounded-full' style={{width:val.progress}}/>
                            </div>
                        </div>
                        <div className='w-16 shrink-0 text-right'>

                            <span className='block text-md text-foreground'>{val.view}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
