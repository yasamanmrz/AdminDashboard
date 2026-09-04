'use client'

import React from 'react'
import { FiDroplet, FiGlobe, FiMoon, FiSettings, FiSun, FiType, FiX } from 'react-icons/fi'
import { useSettings } from './SettingProvider'
import { useRouter } from 'next/navigation'

export default function SettingSideBar({ isOpen, onClose }) {
const router = useRouter()
const{theme, setTheme, primaryColor, setPrimaryColor, direction, setDirection, language, setLanguage}=useSettings()
const changeLanguage=(value)=>{
  setLanguage(value)
  router.refresh()
}

    return (
        <>
            {isOpen && (
                <div onClick={onClose} className='fixed inset-0 bg-black/40 z-40' />
            )}
            <div className={`fixed top-0 right-0 h-screen overflow-y-auto w-[90vw] sm:w-80 bg-[#272f39] text-white z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
               <div className='flex items-center justify-between p-5 border-b border-white/10'>
                 <div className='flex items-center gap-2'>
                   <FiSettings size={20}/>
                   <h2 className='text-lg font-semibold'>Setting</h2>
                 </div>
                 <button onClick={onClose} className='w-10 h-10 flex items-center justify-center rounded-lg transition cursor-pointer touch-manipulation'>
                    <FiX size={20}/>
                 </button>
               </div>
               <div className='p-5 space-y-6'>
                <div>
                    <div className='flex items-center gap-2 mb-3'>
                      <FiSun />
                      <h3 className='font-medium'>Appearance</h3>
                    </div>
                    <div className='flex gap-2'>
                        <button onClick={()=>setTheme('light')} className={`flex-1 p-3 rounded-lg transition cursor-pointer touch-manipulation ${theme==='light' ? 'bg-primary text-white':'bg-white/10'}`}>
                            <FiSun className='mx-auto mb-1'/>
                            <span className='text-sm'>Light</span>
                        </button>
                        <button onClick={()=>setTheme('dark')} className={`flex-1 p-3 rounded-lg transition cursor-pointer touch-manipulation ${theme==='dark' ? 'bg-primary text-white':'bg-white/10'}`}>
                            <FiMoon className='mx-auto mb-1'/>
                            <span className='text-sm'>Dark</span>
                        </button>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-2 mb-3'>
                       <FiDroplet />
                       <h3 className='font-medium'>Colors</h3>
                    </div>
                    <div className='flex gap-3'>
                      <button onClick={()=>setPrimaryColor('#a855f7')} className={`w-10 h-10 touch-manipulation rounded-full bg-purple-500 cursor-pointer ${primaryColor==='#a855f7'?'ring-2 ring-white ring-offset-2 ring-offset-[#272f39]':''}`}/>
                      <button onClick={()=>setPrimaryColor('#3b82f6')} className={`w-10 h-10 touch-manipulation rounded-full bg-blue-500 cursor-pointer ${primaryColor==='#3b82f6'?'ring-2 ring-white ring-offset-2 ring-offset-[#272f39]':''}`}/>
                      <button onClick={()=>setPrimaryColor('#22c55e')} className={`w-10 h-10 touch-manipulation rounded-full bg-green-500 cursor-pointer ${primaryColor==='#22c55e'?'ring-2 ring-white ring-offset-2 ring-offset-[#272f39]':''}`}/>
                      <button onClick={()=>setPrimaryColor('#ec4899')} className={`w-10 h-10 touch-manipulation rounded-full bg-pink-500 cursor-pointer ${primaryColor==='#ec4899'?'ring-2 ring-white ring-offset-2 ring-offset-[#272f39]':''}`}/>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-2 mb-3'>
                       <FiType />
                       <h3 className='font-medium'>Direction</h3>
                    </div>
                    <div className='flex gap-2'>
                      <button onClick={()=>setDirection('ltr')} className={`flex-1 p-2 rounded-lg bg-white/10 cursor-pointer touch-manipulation ${direction==='ltr'?'bg-primary text-white': 'bg-white/10'}`}>LTR</button>
                      <button onClick={()=>setDirection('rtl')} className={`flex-1 p-2 rounded-lg bg-white/10 cursor-pointer touch-manipulation ${direction==='rtl'?'bg-primary text-white': 'bg-white/10'}`}>RTL</button>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-2 mb-3'>
                       <FiGlobe />
                       <h3 className='font-medium'>Language</h3>
                    </div>
                    <div className='flex gap-2'>
                      <button onClick={()=>changeLanguage('en')} className={`flex-1 p-2 rounded-lg bg-white/10 cursor-pointer touch-manipulation ${language==='en'?'bg-primary text-white':'bg-white/10'}`}>English</button>
                      <button onClick={()=>changeLanguage('fa')} className={`flex-1 p-2 rounded-lg bg-white/10 cursor-pointer touch-manipulation ${language==='fa'?'bg-primary text-white':'bg-white/10'}`}>فارسی</button>
                    </div>
                </div>
               </div>
            </div>
        </>
    )
}
