'use client'

import React, { useState } from 'react'
import Leftside from './sides/Leftside'
import Rightside from './sides/Rightside'

export default function page() {

const [sideBarOpen, setSideBarOpen]= useState(false)

  return (
    <div className='w-full flex flex-col lg:flex-row *:border'>
      <Leftside sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>
      <Rightside setSideBarOpen={setSideBarOpen}/>
    </div>
  )
}
