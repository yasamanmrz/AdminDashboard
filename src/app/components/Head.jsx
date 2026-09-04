'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FiArrowLeft, FiChevronDown, FiLogOut, FiSettings, FiUser, FiMenu } from 'react-icons/fi'
import SettingButton from './setting/SettingButton'
import SettingSideBar from './setting/SettingSideBar'

export default function Head({ setSideBarOpen }) {

  const [profileOpen, setProfileOpen] = useState(false)

  const[settingOpen, setSettingOpen]=useState(false)

  const handleToggle = () => {
    setSideBarOpen(prev => !prev)
  }


  return (
    <div className='w-full flex items-center justify-between border-b border-foreground/20 p-2 sm:p-3 min-h-14'>
      <div className='flex items-center gap-2 sm:gap-4 min-w-0'>
        <button className='w-10 h-10 items-center justify-center rounded-lg touch-manipulation sm:hidden' onClick={handleToggle} aria-label='Open sidebar'><FiMenu className='w-5 h-5 text-foreground/60 sm:hidden'/></button>
        <button className='hidden sm:flex w-10 h-10 items-center justify-center rounded-llg touch-manipulation' onClick={handleToggle} aria-label='Toggle sidebar'><FiArrowLeft className='w-5 h-5 text-foreground/60' /></button>
        <span className='hidden sm:block text-foreground/60 text-sm truncate'>Dashboard</span>
      </div>
      <div className='flex items-center gap-1.5 sm:gap-2 md:gap-4 shrink-0'>
        <SettingButton onClick={()=>setSettingOpen(true)}/>
        <SettingSideBar isOpen={settingOpen} onClose={()=>setSettingOpen(false)}/>
        <div className='relative'>
          <button onClick={() => setProfileOpen(prev => !prev)} className='flex items-center gap-2 px-1.5 sm:px-2 rounded-xl transition touch-manipulation min-h-10'>
            <Image src='/yasi.jpg' width={50} height={50} alt='profile' className='w-8 h-8 rounded-full bg-cover' />
            <span className='hidden sm:block text-sm text-foreground/60'>Yasaman</span>
            <FiChevronDown size={15} className='hidden sm:block text-foreground/60' />
          </button>
          {profileOpen && (
            <div className='absolute right-0 top-12 w-40 max-w-[calc(100vw-2rem)] bg-[#1c252e] border border-gray-700 rounded-xl shadow-xl p-2 z-50'>
               <p className='px-3 py-2 text-xs text-gray-500'>ADMIN</p>
               <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 touch-manipulation'><FiUser size={16}/>Profile</button>
               <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 touch-manipulation'><FiSettings size={16}/>Setting</button>
               <div className='my-1 border-t border-gray-700'/>
               <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400 touch-manipulation'><FiLogOut size={16}/>Sign out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
