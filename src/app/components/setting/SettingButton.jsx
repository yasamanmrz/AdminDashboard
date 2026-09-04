'use client'

import React from 'react'
import { FiSettings } from 'react-icons/fi'

export default function SettingButton({onClick}) {
  return (
    <button onClick={onClick} className='w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-full cursor-pointer touch-manipulation'>
        <FiSettings size={18}/>
    </button>
  )
}
