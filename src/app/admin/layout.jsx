'use client'

import React, { useState } from 'react'
import Leftside from '../sides/Leftside'
import Rightside from '../sides/Rightside'
import Footer from '../components/Foote'


export default function Adminlayout({children}) {

const [sideBarOpen, setSideBarOpen]=useState(false)

  return (
    <div className='flex min-h-screen'>
        <Leftside sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>
        <Rightside setSideBarOpen={setSideBarOpen}>
            {children}
        </Rightside>
    </div>
  )
}