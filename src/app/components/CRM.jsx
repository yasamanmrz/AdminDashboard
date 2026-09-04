import React from 'react'
import CrmChart from '../charts/CrmChart'
import Crm3Flex from '../charts/Crm3Flex'
import EcommerceOpenDeals from '../charts/EcommerceOpenDeals'
import CrmLeaderBoard from '../charts/CrmLeaderBoard'
import CrmLeadSource from '../charts/CrmLeadSource'

export default function CRM() {
  return (
    <div className='w-full grid *:w-full p-3 sm:p-5 gap-4 sm:gap-6 overflow-x-hidden'>
       <div>
         <CrmChart />
       </div>
       {/* ////////////////////// */}
       <div>
        <Crm3Flex />
       </div>
       {/* ////////////////////////// */}
       <div className='flex flex-col lg:flex-row gap-4 w-full'>
        <EcommerceOpenDeals />
        <CrmLeaderBoard />
       </div>
       {/* ////////////////////////// */}
       <div>
        <CrmLeadSource />
       </div>
    </div>
  )
}
