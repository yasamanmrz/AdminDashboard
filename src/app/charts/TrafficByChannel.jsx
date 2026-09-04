import React from 'react'

export default function TrafficByChannel() {
    return (
        <div className='w-full lg:w-1/2 bg-surface rounded-2xl p-4 sm:p-5'>
            <div className='flex items-start justify-between'>
                <h2 className='text-foreground text-2xl font-semibold'>Traffic by Channel</h2>
            </div>
            <div className='mt-5'>
                <div className='flex items-center justify-between'>
                    <span className='text-foreground text-sm'>Organic Search</span>
                    <span className='text-foreground text-xs font-semibold'>38%</span>
                </div>
                <div className='w-full h-2.5 bg-foreground/20 rounded-full mt-2'>
                    <div className='w-[38%] h-full bg-primary rounded-full'></div>
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex items-center justify-between'>
                    <span className='text-foreground text-sm'>Direct</span>
                    <span className='text-foreground text-xs font-semibold'>28%</span>
                </div>
                <div className='w-full h-2.5 bg-foreground/20 rounded-full mt-2'>
                    <div className='w-[28%] h-full bg-[#3B82F6] rounded-full'></div>
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex items-center justify-between'>
                    <span className='text-foreground text-sm'>Referral</span>
                    <span className='text-foreground text-xs font-semibold'>18%</span>
                </div>
                <div className='w-full h-2.5 bg-foreground/20 rounded-full mt-2'>
                    <div className='w-[18%] h-full bg-[#F59E0B] rounded-full'></div>
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex items-center justify-between'>
                    <span className='text-foreground text-sm'>Social Media</span>
                    <span className='text-foreground text-xs font-semibold'>12%</span>
                </div>
                <div className='w-full h-2.5 bg-foreground/20 rounded-full mt-2'>
                    <div className='w-[12%] h-full bg-[#EC4899] rounded-full'></div>
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex items-center justify-between'>
                    <span className='text-foreground text-sm'>Email</span>
                    <span className='text-foreground text-xs font-semibold'>4%</span>
                </div>
                <div className='w-full h-2.5 bg-foreground/20 rounded-full mt-2'>
                    <div className='w-[4%] h-full bg-[#8B5CF6] rounded-full'></div>
                </div>
            </div>
        </div>
    )
}
