'use client'

import React, { useState } from 'react'
import { FiCheck } from 'react-icons/fi'

const data = [
    { title: 'Starter', num: '$9', month: '/month', icon: FiCheck, op1: 'Up to 3 projects', op2: '1 GB storage', op3: 'Basic analytics', op4: 'Email support', op5: 'Community access', },
    { title: 'Pro', num: '$39', month: '/month', icon: FiCheck, op1: 'Unlimited projects', op2: '50 GB storage', op3: 'Advanced analytics', op4: 'Priority support', op5: 'Team collaboration (up to 10)', op6: 'API access', op7: 'Custom integrations', op8: 'Audit logs', op9: 'SSO authentication', op10: 'Custom domains', },
    { title: 'Enterprise', num: '$99', month: '/month', icon: FiCheck, op1: 'Everything in Pro', op2: 'Unlimited storage', op3: 'Dedicated account manager', op4: 'Priority support', op5: 'Team collaboration (up to 10)', op6: 'API access', op7: 'Custom integrations', op8: 'Audit logs', },
]

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(null)
    return (
        <div className='w-full p-3 sm:p-5 overflow-x-hidden'>
            <div className='mb-5 sm:mb-8'>
                <h1 className='text-primary text-2xl font-semibold'>Pricing</h1>
                <p className='text-foreground/50 text-sm'>Choose the right plan for your team</p>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-4'>
                {data.map((val) => {
                    const Icon = val.icon
                    const options = Object.keys(val).filter((key) =>
                        key.startsWith('op')
                    )
                    return (
                        <div
                            key={val.title}
                            onClick={() => setSelectedPlan(val.title)}
                            className={`w-full md:flex-1 bg-surface rounded-2xl p-5 sm:p-6 border transition cursor-pointer flex flex-col ${selectedPlan === val.title ? 'border-primary' : 'border-foreground/10'}`}>
                            <h1 className='text-xl text-foreground mb-3 font-semibold'>{val.title}</h1>
                            <div className='flex items-center gap-1 mb-6'>
                                <p className='text-2xl text-foreground font-semibold'>{val.num}</p>
                                <span className='text-sm text-foreground/50'> {val.month}</span>
                            </div>
                            <div className='flex-1 flex flex-col gap-3'>
                                {options.map((option) => {
                                    return (
                                        <div key={option} className='flex items-center gap-2'>
                                            <div className='w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0'>
                                                <Icon size={13} />
                                            </div>
                                            <span className='text-sm text-foreground/70'>{val[option]}</span>
                                        </div>
                                    )
                                })}

                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedPlan(val.title)
                                }}
                                className={`w-full mt-8 py-2.5 rounded-xl text-sm font-medium transition ${selectedPlan === val.title ? 'bg-primary text-white' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}>
                                Choose Plan
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}