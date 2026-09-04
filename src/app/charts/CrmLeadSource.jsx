import React from 'react'

export default function CrmLeadSource() {
  return (
    <div className='w-full bg-surface rounded-2xl p-4 sm:p-5'>
    <div className='flex items-start justify-between'>
        <h2 className='text-foreground text-xl sm:text-2xl font-semibold'>Lead Sources</h2>
    </div>
    <div className='mt-5'>
        <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
            <span className='text-foreground text-sm'>Website</span>
            <p className='text-xs sm:text-sm text-foreground/50 font-semibold'>156 leads / 42 converted (27%)</p>
        </div>
        <div className='w-full h-3 bg-foreground/20 rounded-full mt-2'>
            <div className='w-[38%] h-full bg-primary rounded-full'></div>
        </div>
    </div>
    <div className='mt-4'>
        <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
            <span className='text-foreground text-sm'>Referral</span>
            <p className='text-xs sm:text-sm text-foreground/50 font-semibold'>89 leads / 34 converted (38%)</p>
        </div>
        <div className='w-full h-3 bg-foreground/20 rounded-full mt-2'>
            <div className='w-[23%] h-full bg-primary rounded-full'></div>
        </div>
    </div>
    <div className='mt-4'>
        <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
            <span className='text-foreground text-sm'>LinkedIn</span>
            <p className='text-xs sm:text-sm text-foreground/50 font-semibold'>67 leads / 18 converted (27%)</p>
        </div>
        <div className='w-full h-3 bg-foreground/20 rounded-full mt-2'>
            <div className='w-[17%] h-full bg-primary rounded-full'></div>
        </div>
    </div>
    <div className='mt-4'>
        <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
            <span className='text-foreground text-sm'>Cold Email</span>
            <p className='text-xs sm:text-sm text-foreground/50 font-semibold'>234 leads / 28 converted (12%)</p>
        </div>
        <div className='w-full h-3 bg-foreground/20 rounded-full mt-2'>
            <div className='w-[13%] h-full bg-primary rounded-full'></div>
        </div>
    </div>
</div>
  )
}
