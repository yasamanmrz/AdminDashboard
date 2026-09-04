import React from 'react'

export default function SaasChurn() {
    return (
        <div className='w-full lg:w-1/2 bg-surface rounded-2xl p-4 sm:p-5'>
            <div className='flex items-start justify-between'>
                <h2 className='text-foreground text-xl sm:text-2xl font-semibold'>Churn Reasons</h2>
            </div>
            <div className='mt-7'>
                <div className='flex items-center justify-between'>
                    <span className='text-foreground text-sm'>Too Expensive</span>
                    <p className='text-sm text-foreground/50 font-semibold'>32%</p>
                </div>
                <div className='w-full h-3 bg-foreground/20 rounded-full mt-2'>
                    <div className='w-[32%] h-full bg-[#EF4444] rounded-full'></div>
                </div>
            </div>
            <div className='mt-6'>
                <div className='flex items-center justify-between'>
                    <span className='text-foreground text-sm'>Missing Features</span>
                    <p className='text-sm text-foreground/50 font-semibold'>28%</p>
                </div>
                <div className='w-full h-3 bg-foreground/20 rounded-full mt-2'>
                    <div className='w-[28%] h-full bg-[#F59E0B] rounded-full'></div>
                </div>
            </div>
            <div className='mt-6'>
                <div className='flex items-center justify-between'>
                    <span className='text-foreground text-sm'>Switched to Competitor</span>
                    <p className='text-sm text-foreground/50 font-semibold'>22%</p>
                </div>
                <div className='w-full h-3 bg-foreground/20 rounded-full mt-2'>
                    <div className='w-[22%] h-full bg-[#8B5CF6] rounded-full'></div>
                </div>
            </div>
            <div className='mt-6'>
                <div className='flex items-center justify-between'>
                    <span className='text-foreground text-sm'>No Longer Needed</span>
                    <p className='text-sm text-foreground/50 font-semibold'>18%</p>
                </div>
                <div className='w-full h-3 bg-foreground/20 rounded-full mt-2'>
                    <div className='w-[18%] h-full bg-[#6B7280] rounded-full'></div>
                </div>
            </div>
        </div>
    )
}
