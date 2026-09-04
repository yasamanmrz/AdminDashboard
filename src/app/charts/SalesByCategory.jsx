import React from 'react'

export default function SalesByCategory() {
  return (
    <div className='w-full bg-surface rounded-2xl p-4 sm:p-5'>
    <div className='flex items-start justify-between'>
        <h2 className='text-foreground text-xl sm:text-2xl font-semibold'>Sales by Category</h2>
    </div>
    <div className='mt-5'>
        <div className='flex items-center justify-between'>
            <span className='text-foreground text-sm'>Electronics</span>
            <p className='text-sm text-foreground font-semibold whitespace-nowrap'>$68.4K<span className='text-foreground text-xs font-semibold'>(38%)</span></p>
        </div>
        <div className='w-full h-3 bg-foreground/20 rounded-full mt-2'>
            <div className='w-[38%] h-full bg-primary rounded-full'></div>
        </div>
    </div>
    <div className='mt-4'>
        <div className='flex items-center justify-between'>
            <span className='text-foreground text-sm'>Wearables</span>
            <p className='text-sm text-foreground font-semibold whitespace-nowrap'>$42.3K<span className='text-foreground text-xs font-semibold'>(23%)</span></p>
        </div>
        <div className='w-full h-3 bg-foreground/20 rounded-full mt-2'>
            <div className='w-[23%] h-full bg-[#3B82F6] rounded-full'></div>
        </div>
    </div>
    <div className='mt-4'>
        <div className='flex items-center justify-between'>
            <span className='text-foreground text-sm'>Accessories</span>
            <p className='text-sm text-foreground font-semibold whitespace-nowrap'>$31.2K<span className='text-foreground text-xs font-semibold'>(17%)</span></p>
        </div>
        <div className='w-full h-3 bg-foreground/20 rounded-full mt-2'>
            <div className='w-[17%] h-full bg-[#F59E0B] rounded-full'></div>
        </div>
    </div>
    <div className='mt-4'>
        <div className='flex items-center justify-between'>
            <span className='text-foreground text-sm'>Home & Office</span>
            <p className='text-sm text-foreground font-semibold whitespace-nowrap'>$24.5K<span className='text-foreground text-xs font-semibold'>(13%)</span></p>
        </div>
        <div className='w-full h-3 bg-foreground/20 rounded-full mt-2'>
            <div className='w-[13%] h-full bg-[#EC4899] rounded-full'></div>
        </div>
    </div>
    <div className='mt-4'>
        <div className='flex items-center justify-between'>
            <span className='text-foreground text-sm'>Audio</span>
            <p className='text-sm text-foreground font-semibold whitespace-nowrap'>$16.0k<span className='text-foreground text-xs font-semibold'>(9%)</span></p>
        </div>
        <div className='w-full h-3 bg-foreground/20 rounded-full mt-2'>
            <div className='w-[9%] h-full bg-[#8B5CF6] rounded-full'></div>
        </div>
    </div>
</div>
  )
}
