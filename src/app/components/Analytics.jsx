import React from 'react'
import AnalyticChart from '../charts/AnalyticChart'
import Analytic4Flex from '../charts/Analytic4Flex'
import TrafficByChannel from '../charts/TrafficByChannel'
import DeviceBreakDown from '../charts/DeviceBreakDown'
import TopPages from '../charts/TopPages'
import TrafficByReg from '../charts/TrafficByReg'

export default function Analytics() {
    return (
        <div className='w-full grid *:w-full p-3 sm:p-4 md:p-5 gap-4 sm:gap-6 overflow-x-hidden'>
            {/* ////////////////////first part///////////////// */}
            <div>
             <AnalyticChart />
            </div>
            {/* /////////////////////second part//////////////////// */}
            <div>
              <Analytic4Flex />
            </div>
            {/* /////////////////////third part////////////////////////// */}
            <div className='w-full flex flex-col lg:flex-row gap-4'>
                <TrafficByChannel />
                <DeviceBreakDown />
            </div>
            {/* //////////////////////forth part//////////////////////// */}
            <div className='w-full flex flex-col lg:flex-row gap-4'>
                <TopPages />
                <TrafficByReg />
            </div>
        </div>
    )
}
