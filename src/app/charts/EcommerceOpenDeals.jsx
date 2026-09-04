import React from 'react'


const TopPro = [
    {status:'Negotiation', title: 'TechVision Inc.', name: 'Sam Patel', sales: '$45K', sold: 'Apr 15', progress: '100%' },
    {status:'won', title: 'Nexus Enterprises', name: 'Jordan Lee', sales: '$51K', sold: 'Mar 20', progress: '70%' },
    {status:'Qualified', title: 'Pinnacle Software', name: 'Sam Patel', sales: '$41K', sold: 'May 20', progress: '50%' },
    {status:'Proposal', title: 'Summit Digital', name: 'Alex Rivera', sales: '$36K', sold: 'Apr 20', progress: '45%' },
    {status:'Proposal', title: 'CloudScale Solutions', name: 'Sam Patel', sales: '$32K', sold: 'Apr 22', progress: '40%' },
]

export default function EcommerceOpenDeals() {
  return (
    <div className='w-full lg:w-1/2'>
        <div className='w-full bg-surface p-4 sm:p-5 rounded-2xl *:w-full'>
            <h2 className='text-xl sm:text-2xl lg:text-4xl text-foreground py-2'>Top Open Deals</h2>
            <div className='mt-2 divide-y divide-foreground/20'>
                {TopPro.map((val, index)=>(
                    <div key={index} className='flex items-center justify-between py-4'>
                        <div className='w-[70%] min-w-0'>
                            <div className='text-sm text-foreground wrap-break-word'>
                                {val.title}
                            </div>
                            <p className='text-foreground/50 text-xs mb-2'>{val.name}</p>
                            <div className='w-full h-1 bg-foreground/20 rounded-full'>
                                <div className='h-full bg-primary rounded-full' style={{width:val.progress}}/>
                            </div>
                        </div>
                        <div className='w-[20%] text-right shrink-0'>
                            <span className='block text-md text-foreground font-semibold'>{val.sales}</span>
                            <div className='my-1'><span className='bg-primary/10 p-1 text-xs text-primary rounded-2xl'>{val.status}</span></div>
                            <span className='block text-xs text-[#637284]'>{val.sold}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
