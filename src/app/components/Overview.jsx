

import Link from 'next/link'
import React from 'react'
import { FiArrowRight, FiDollarSign, FiTrendingUp } from 'react-icons/fi'
import RevenueCharts from '../charts/RevenueCharts'
import PerformanceChart from '../charts/PerformanceChart'
import OrderChart from '../charts/OrderChart'
import CustomerChart from '../charts/CustomerChart'
import TopProducts from '../charts/TopProducts'
import RecentAct from '../charts/RecentAct'
import en from '../components/translation/en'
import fa from '../components/translation/fa'
import { cookies } from 'next/headers'

export default async function Overview() {

  const cookieStore = await cookies()
  const language = cookieStore.get('language')?.value || 'en'
  const t = language === 'fa' ? fa : en

  return (
    <div className='w-full grid *:w-full *:rounded-2xl p-3 sm:p-5 gap-4 sm:gap-6'>
      {/* ////////////////first part//////////////// */}
      <div className='relative overflow-hidden bg-surface rounded-2xl border border-white/5'>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="overviewGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#1c252e" stopOpacity="0.95" /><stop offset="35%" stopColor="#1a332b" stopOpacity="0.9" /><stop offset="65%" stopColor="#1c252e" stopOpacity="0.75" /><stop offset="100%" stopColor="#28503F" stopOpacity="0.85" />
            </linearGradient>
            <filter id="blur"><feGaussianBlur stdDeviation="25" /></filter>
          </defs>
          <path d="M0 80 C150 20, 250 150, 400 70 S650 20, 800 90 S1000 160, 1200 50 L1200 200 L0 200 Z" fill="url(#gradient)" />
          <path d="M0 100 C180 40, 300 150, 450 80 S700 30, 850 100 S1050 150, 1200 70" fill="none" stroke="var(--primary)" strokeOpacity="0.35" strokeWidth="2" />
        </svg>
        <div className='relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 px-5 py-6 md:px-7 md:py-7'>
          <div className='w-full md:w-2/3'>
            <p className='text-primary text-md font-medium mb-2'>{t.overview}</p>
            <h1 className='text-2xl md:text-3xl font-semibold tracking-tight mb-2 text-foreground'>{t.welcomeBack}</h1>
            <p className='text-sm md:text-base text-gray-400 max-w-xl'>{t.newOrders} <span className='text-gray-20 font-medium'>{t.revenueToday}</span></p>
          </div>
          <div className='w-full md:w-auto'>
            <Link className='w-full md:w-auto min-h-11 justify-center border border-(--primary)/20 text-primary py-3 px-5 rounded-xl flex items-center gap-2 text-sm font-medium transition-all duration-300' href='/admin/analytics'>{t.viewAnalytics}<FiArrowRight size={16} /></Link>
          </div>
        </div>
      </div>
      {/* /////////////////////second part/////////////// */}
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 *:rounded-2xl'>
        <div className='w-full lg:w-2/3 rounded-2xl p-4 sm:p-5 bg-surface'>
          <div className='w-full flex items-start justify-between'>
            <div>
              <h2 className='text-[#637284] text-sm font-light'>{t.totalRevenue}</h2>
              <p className='text-foreground text-4xl my-2 font-semibold tracking-tight'>$48,250</p>
              <div className='flex items-center gap-2 text-xs'>
                <span className='flex items-center gap-1 text-primary font-medium'><FiTrendingUp size={15} />+12.5%<span className='text-[#637284]'>{t.fromLastMonth}</span></span>
              </div>
            </div>
            <div className='flex items-center justify-end'>
              <div className='w-12 h-12 rounded-xl bg-primary/10 border border-[#4BE3A4]/10 flex items-center justify-center'>
                <FiDollarSign size={24} className='text-(--primary)/20' />
              </div>
            </div>
          </div>
          <div className='w-full'>
            <RevenueCharts />
          </div>
        </div>
        <div className='w-full lg:w-1/3 bg-surface flex flex-col items-center justify-center p-4 sm:p-5'>
          <div className='w-full'>
            <PerformanceChart />
          </div>
          <h3 className='text-foreground'>{t.monthlyGoal}</h3>
          <p className='text-[#636b78]'>{t.target}</p>
        </div>
      </div>
      {/* //////////////////third part/////////////////// */}
      <div className='flex flex-col lg:flex-row gap-4  lg:gap-6 *:bg-surface *:rounded-2xl *:p-4 *:sm:p-5 *:w-full *:lg:w-1/3'>
        <div>
          <OrderChart />
        </div>
        <div>
          <CustomerChart />
        </div>
        <div>
          <div className='flex items-start justify-between'>
            <div>
              <h2 className='text-foreground text-sm font-semibold'>{t.conversionFunnel}</h2>
              <p className='text-foreground text-3xl font-semibold mt-2'>6.45%</p>
              <span className='text-[#637284] text-xs'>{t.overallConversionRate}</span>
            </div>
            <span className='text-xs font-medium text-[#637284] flex items-center gap-1'>{t.thisMonth}</span>
          </div>
          <div className='mt-4'>
            <div className='flex items-center justify-between'>
              <span className='text-foreground text-xs'>{t.visitors}</span>
              <span className='text-foreground text-xs font-semibold'>10,000</span>
            </div>
            <div className='w-full h-2.5 bg-foreground/20 rounded-full mt-2'>
              <div className='w-full h-full bg-primary rounded-full'></div>
            </div>
          </div>
          <div className='mt-3'>
            <div className='flex items-center justify-between'>
              <span className='text-foreground text-xs'>{t.leads}</span>
              <span className='text-foreground text-xs font-semibold'>2,400</span>
            </div>
            <div className='w-full h-2.5 bg-foreground/20 rounded-full mt-2'>
              <div className='w-[70%] h-full bg-primary rounded-full'></div>
            </div>
          </div>
          <div className='mt-3'>
            <div className='flex items-center justify-between'>
              <span className='text-foreground text-xs'>{t.customers}</span>
              <span className='text-foreground text-xs font-semibold'>892</span>
            </div>
            <div className='w-full h-2.5 bg-foreground/20 rounded-full mt-2'>
              <div className='w-[42%] h-full bg-primary rounded-full'></div>
            </div>
          </div>
          <div className='mt-3'>
            <div className='flex items-center justify-between'>
              <span className='text-foreground text-xs'>{t.paying}</span>
              <span className='text-foreground text-xs font-semibold'>645</span>
            </div>
            <div className='w-full h-2.5 bg-foreground/20 rounded-full mt-2'>
              <div className='w-[30%] h-full bg-primary rounded-full'></div>
            </div>
          </div>
          <div className='border-t border-foreground/20 mt-5 pt-4'>
            <div className='grid grid-cols-3 text-center'>
              <div>
                <span className='text-[#637284] text-[10px] flex items-center justify-center'>visit<FiArrowRight size={12} />Lead</span>
                <span className='block text-[#57E39B] text-sm font-semibold mt-1'>24%</span>
              </div>
              <div>
                <span className='text-[#637284] text-[10px] flex items-center justify-center'>Lead<FiArrowRight size={12} />Customers</span>
                <span className='block text-[#57E39B] text-sm font-semibold mt-1'>37%</span>
              </div>
              <div>
                <span className='text-[#637284] text-[10px] flex items-center justify-center'>Cuatomers<FiArrowRight size={12} />Paid</span>
                <span className='block text-[#F59E0b] text-sm font-semibold mt-1'>72%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /////////////////forth part//////////////////// */}
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 *:w-full *:lg:w-1/2'>
        <div>
          <RecentAct />
        </div>
        <div>
          <TopProducts />
        </div>
      </div>
    </div>
  )
}
