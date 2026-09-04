'use client'
import React from 'react'
import { FiCornerDownLeft, FiDollarSign, FiShoppingCart, FiTrendingUp } from 'react-icons/fi'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'


const data = [
    { day: "01", value: 22400 },
    { day: "03", value: 28300 },
    { day: "05", value: 25100 },
    { day: "07", value: 28100 },
    { day: "09", value: 24850 },
    { day: "11", value: 22200 },
    { day: "13", value: 21000 },
    { day: "15", value: 30550 },
    { day: "17", value: 33900 },
    { day: "19", value: 34200 },
    { day: "21", value: 35850 },
    { day: "23", value: 35850 },
    { day: "25", value: 36900 },
    { day: "27", value: 38550 },
    { day: "29", value: 40800 },
    { day: "31", value: 41250 },
]

export default function EcommerceChart() {


    return (
        <div>
            <div className='flex flex-col md:flex-row gap-4 sm:items-center sm:justify-between'>
                <div>
                    <h1 className='text-primary text-2xl font-semibold'>eCommerce</h1>
                    <p className='text-foreground/60 text-sm mt-1'>Sales performance and product analytics</p>
                </div>
            </div>
            <div className='mt-6 rounded-2xl bg-surface p-4 sm:p-6 flex flex-col lg:flex-row gap-6'>
                <div className="w-full lg:w-[65%]">
                    <h1 className='text-[#637284] text-sm font-light'>Total Sales</h1>
                    <p className='text-foreground text-4xl my-2 font-semibold tracking-tight'>$182,420</p>
                    <div className='flex flex-wrap items-center gap-2 sm:gap-3 text-[#637284] text-sm'>
                    <span>vs $165,200 last month</span>
                    <span className='flex items-center gap-1 text-primary font-medium'><FiTrendingUp size={16} className='text-primary' />+10.4%</span>
                    </div>
                    <div className='h-32 sm:h-36'>
                        <ResponsiveContainer width='100%' height='100%'>
                            <AreaChart data={data} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.19} />
                                        <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="value" baseValue="dataMin" stroke="var(--primary)" strokeWidth={2} fill="url(#revenueGradient)" dot={false} isAnimationActive={true} animationDuration={1800} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='flex flex-col gap-4 sm:gap-5 w-full lg:w-[35%] justify-center items-start'>
                    <div className='border border-foreground/15 rounded-xl w-full flex items-center gap-3 px-3 py-3'>
                        <div className='w-10 h-10 rounded-2xl flex items-center bg-[#1F2E42] justify-center  text-primary'>
                            <FiDollarSign className='text-[#3369BF]' size={18} />
                        </div>
                        <div className='flex flex-col justify-start flex-1 min-w-0'>
                            <h4 className='text-foreground/50 text-xs'>Avg. Order Value</h4>
                            <p className='text-foreground text-md font-semibold'>142$</p>
                        </div>
                    </div>
                    <div className='border border-foreground/15 rounded-xl w-full flex items-center gap-3 px-3 py-3'>
                        <div className='w-10 h-10 rounded-2xl flex items-center justify-center bg-primary/10'>
                            <FiShoppingCart className='text-primary' size={18} />
                        </div>
                        <div className='flex flex-col justify-center flex-1 min-w-0'>
                            <h4 className='text-foreground/50 text-xs'>Orders Today</h4>
                            <p className='text-foreground text-md font-semibold'>23</p>
                        </div>
                    </div>
                    <div className='border border-foreground/15 rounded-xl w-full flex items-center gap-3 px-3 py-3'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-2xl bg-[#312830]'>
                            <FiCornerDownLeft className='text-[#D54041]' size={18} />
                        </div>
                        <div className='flex flex-col justify-start flex-1 min-w-0'>
                            <h4 className='text-foreground/50 text-xs'>Refund Rate</h4>
                            <p className='text-foreground text-md font-semibold'>2.1%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
