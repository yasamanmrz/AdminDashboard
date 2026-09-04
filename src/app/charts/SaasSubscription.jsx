'use client'

import React from 'react'

const subscriptionTiers = [
  {
    name: 'Starter',
    users: '420 users',
    percentage: 34,
    revenue: '$8.4K',
    color: 'bg-sky-400',
    border: 'border-foreground/15',
  },
  {
    name: 'Pro',
    users: '645 users',
    percentage: 52,
    revenue: '$32.3K',
    color: 'bg-emerald-400',
    border: 'border-emerald-400/70',
  },
  {
    name: 'Enterprise',
    users: '182 users',
    percentage: 14,
    revenue: '$7.8K',
    color: 'bg-amber-400',
    border: 'border-foreground/15',
  },
]

export default function SaasSubscription() {
  return (
    <div className="w-full rounded-2xl bg-surface p-5 sm:p-6">
      <h2 className="text-foreground text-xl sm:text-2xl font-semibold">Subscription Tiers</h2>
      <div className="mt-5 flex flex-col gap-3">
        {subscriptionTiers.map((tier) => (
          <div key={tier.name} className={`w-full rounded-2xl border ${tier.border} bg-foreground/2 p-4 transition`}>
            <div className="flex items-start justify-between gap-3 sm:gap-4 min-w-0">
              <div className="min-w-0">
                <h3 className="text-foreground text-sm sm:text-base font-semibold">{tier.name}</h3>
                <p className="mt-1 text-foreground/80 text-sm font-medium">{tier.users} ({tier.percentage}%)</p>
              </div>
              <p className="shrink-0 text-foreground text-xl sm:text-2xl font-bold">{tier.revenue}</p>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-foreground/20">
              <div className={`h-full rounded-full ${tier.color}`} style={{ width: `${tier.percentage}%`,}}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}