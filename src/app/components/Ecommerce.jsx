import React from 'react'
import EcommerceChart from '../charts/EcommerceChart'
import Ecommerce4Flex from '../charts/Ecommerce4Flex'
import SalesByCategory from '../charts/SalesByCategory'
import EcommerceTopPro from '../charts/EcommerceTopPro'
import EcommerceRecentOrders from '../charts/EcommerceRecentOrders'


export default function Analytics() {
    return (
        <div className='w-full grid *:w-full p-3 sm:p-5 gap-4 sm:gap-6 overflow-x-hidden'>
            {/* ////////////////////first part///////////////// */}
            <div>
              <EcommerceChart />
            </div>
            {/* /////////////////////second part//////////////////// */}
            <div>
              <Ecommerce4Flex />
            </div>
            {/* /////////////////////third part////////////////////////// */}
            <div className='flex flex-col lg:flex-row gap-4'>
               <SalesByCategory />
               <EcommerceTopPro />
            </div>
            {/* //////////////////////forth part//////////////////////// */}
            <div>
              <EcommerceRecentOrders />
            </div>
        </div>
    )
}
