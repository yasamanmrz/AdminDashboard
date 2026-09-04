
import React from 'react'
import Head from '../components/Head'
import Footer from '../components/Foote'

export default function Rightside({ children, setSideBarOpen }) {
  return (
    <main className='flex-1 min-w-0 min-h-screen flex flex-col p-3 sm:p-4 md:p-6 bg-background text-foreground overflow-x-hidden'>
      <Head setSideBarOpen={setSideBarOpen} />
      <div className='flex-1 min-w-0'>
        {children}
      </div>
      <Footer />
    </main>
  )
}

