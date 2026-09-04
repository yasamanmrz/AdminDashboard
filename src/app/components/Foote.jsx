'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FiGithub, FiLinkedin, FiInstagram, FiX } from 'react-icons/fi'

export default function Footer() {
  const [open, setOpen] = useState(false)

  return (
    <footer className='relative flex justify-end px-3 sm:px-5 py-2'>

      {/* Profile */}
      <button
        type='button'
        onClick={() => setOpen(!open)}
        className='w-11 h-11 rounded-full overflow-hidden border border-foreground/10 hover:border-primary transition active:scale-95 touch-manipulation'
      >
      <Image src='/yasi.jpg' alt='Yasaman Mirzaei' width={100} height={100} className='w-full h-full object-cover'/>
      </button>

      {/* Popup */}
      {open && (
        <div className='absolute right-3 sm:right-5 bottom-14 z-50 w-52 bg-surface border border-foreground/10 rounded-xl shadow-xl p-3'>

          <div className='flex items-center justify-between mb-2'>
            <div>
              <p className='text-sm font-medium text-foreground'>
                Yasaman Mirzaei
              </p>

              <p className='text-[10px] text-foreground/40'>
                Follow me
              </p>
            </div>

            <button
              type='button'
              onClick={() => setOpen(false)}
              className='w-7 h-7 flex items-center justify-center rounded-lg text-foreground/40 hover:bg-foreground/5 active:scale-95 touch-manipulation'
            >
              <FiX size={15} />
            </button>
          </div>

          <div className='space-y-1'>

            <a
              href='https://github.com/yasamanmrz'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs text-foreground/60 hover:bg-primary/10 hover:text-primary transition'
            >
              <FiGithub size={15} />
              GitHub
            </a>

            <a
              href='https://www.linkedin.com/in/yasaman-mirzaei-b9499537b'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs text-foreground/60 hover:bg-primary/10 hover:text-primary transition'
            >
              <FiLinkedin size={15} />
              LinkedIn
            </a>

            <a
              href='https://www.instagram.com/yasaman_dev?igsh=MWZkMGNmazlidTV3cQ=='
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs text-foreground/60 hover:bg-primary/10 hover:text-primary transition'
            >
              <FiInstagram size={15} />
              Instagram
            </a>

          </div>
        </div>
      )}

    </footer>
  )
}