import React from 'react'
import SaasMonthlyRevenue from '../charts/SaasMonthlyRevenue'
import Saas4Flex from '../charts/Saas4Flex'
import SaasSubscription from '../charts/SaasSubscription'
import UserGrouthData from '../charts/UserGrouthData'
import SaasChurn from '../charts/SaasChurn'
import SaasRecentTrials from '../charts/SaasRecentTrials'

export default function SaaS() {
  return (
    <div className='w-full grid *:w-full p-5 gap-6 overflow-x-hidden'>
      {/* ///////////////////////////////// */}
      <div className='w-full'>
        <SaasMonthlyRevenue />
      </div>
      {/* //////////////////////////////// */}
      <div className='w-full'>
        <Saas4Flex />
      </div>
      {/* /////////////////////////// */}
      <div className='flex flex-col lg:flex-row gap-4'>
        <SaasSubscription />
        <UserGrouthData />
      </div>
      {/* /////////////////////////////////// */}
      <div className='flex flex-col lg:flex-row gap-4'>
          <SaasChurn />
          <SaasRecentTrials />
      </div>
    </div>
  )
}