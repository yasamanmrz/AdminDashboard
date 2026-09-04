

'use client'

import Link from 'next/link'
import React from 'react'
import { FiGrid, FiBarChart2, FiShoppingCart, FiUsers, FiCloud, FiMessageSquare, FiMail, FiBarChart, FiCalendar, FiCreditCard, FiBell, FiShoppingBag, FiBox, FiUser } from 'react-icons/fi'

export default function Leftside({ sideBarOpen, setSideBarOpen }) {

  const handleLinkClick = () => {
    if (window.innerWidth < 640) {
      setSideBarOpen(false)
    }
  }

  return (
    <div
      className={`text-primary p-3 transition-all duration-300 min-h-screen shrink-0 overflow-y-auto overflow-x-hidden
        ${!sideBarOpen
          ? 'hidden sm:block sm:w-20 bg-primary/10'
          : 'bg-background w-20 sm:relative sm:top-auto sm:left-auto sm:h-auto sm:w-56 md:w-64 lg:w-1/6 sm:bg-primary/10'
        }`}>

      <h1
        className={`uppercase font-semibold border-b border-foreground/20 pt-7 pb-4
          ${sideBarOpen
            ? 'text-lg text-center'
            : 'text-lg text-center'
          }
          sm:${sideBarOpen ? 'text-xl text-left' : 'text-lg text-center'}`}>
        <span className="sm:hidden">AP</span>
        <span className="hidden sm:inline text-center ml-1">
          {sideBarOpen ? 'Admin Pannel' : 'AP'}
        </span>
      </h1>

      <h2 className={`hidden sm:block text-xs uppercase tracking-wider text-foreground/50 pt-8 pb-3 ${!sideBarOpen ? 'sm:hidden' : ''}`}>Dashboards</h2>

      <div className={`w-full flex flex-col gap-3 sm:gap-4 mt-3 ml-2 ${sideBarOpen?'items-start':'items-center'}`}>

        <Link onClick={handleLinkClick} className={`flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:gap-4 ${sideBarOpen?'justify-start':'justify-center'}`} href="/admin/overview">
          <FiGrid className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'Overview'}
          </span>
        </Link>

        <Link onClick={handleLinkClick} className="flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:justify-start sm:gap-4" href="/admin/analytics">
          <FiBarChart2 className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'Analytics'}
          </span>
        </Link>

        <Link onClick={handleLinkClick} className="flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:justify-start sm:gap-4" href="/admin/eCommerce">
          <FiShoppingCart className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'eCommerce'}
          </span>
        </Link>

        <Link onClick={handleLinkClick} className="flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:justify-start sm:gap-4" href="/admin/crm">
          <FiUsers className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'CRM'}
          </span>
        </Link>

        <Link onClick={handleLinkClick} className="flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:justify-start sm:gap-4" href="/admin/saas">
          <FiCloud className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'SaaS'}
          </span>
        </Link>

      </div>

      <h2 className={`hidden sm:block text-xs uppercase tracking-wider text-foreground/50 pt-8 pb-3 ${!sideBarOpen ? 'sm:hidden' : ''}`}>Apps</h2>

      <div className={`w-full flex flex-col gap-3 sm:gap-4 mt-3 ml-1 md:ml-2 ${sideBarOpen?'items-start':'items-center'}`}>

        <Link onClick={handleLinkClick} className="flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:justify-start sm:gap-4" href="/admin/chat">
          <FiMessageSquare className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'Chat'}
          </span>
        </Link>

        <Link onClick={handleLinkClick} className="flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:justify-start sm:gap-4" href="/admin/mail">
          <FiMail className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'Mail'}
          </span>
        </Link>

        <Link onClick={handleLinkClick} className="flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:justify-start sm:gap-4" href="/admin/calender">
          <FiCalendar className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'Calendar'}
          </span>
        </Link>

        <Link onClick={handleLinkClick} className="flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:justify-start sm:gap-4" href="/admin/chart">
          <FiBarChart className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'Charts'}
          </span>
        </Link>

      </div>

      <h2 className={`hidden sm:block text-xs uppercase tracking-wider text-foreground/50 pt-8 pb-3 ${!sideBarOpen ? 'sm:hidden' : ''}`}>Pages</h2>

      <div className={`w-full flex flex-col gap-3 sm:gap-4 mt-3 ml-1 md:ml-2 ${sideBarOpen?'items-start':'items-center'}`}>

        <Link onClick={handleLinkClick} className="flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:justify-start sm:gap-4" href="/admin/pricing">
          <FiCreditCard className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'Pricing'}
          </span>
        </Link>

        <Link onClick={handleLinkClick} className="flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:justify-start sm:gap-4" href="/admin/notification">
          <FiBell className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'Notification'}
          </span>
        </Link>
      </div>

      <h2 className={`hidden sm:block text-xs uppercase tracking-wider text-foreground/50 pt-8 pb-3 ${!sideBarOpen ? 'sm:hidden' : ''}`}>Orders</h2>
      <div className={`w-full flex flex-col gap-3 sm:gap-4 mt-3 ml-1 md:ml-2 ${sideBarOpen?'items-start':'items-center'}`}>
        <Link onClick={handleLinkClick} className="flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:justify-start sm:gap-4" href="/admin/order">
          <FiShoppingBag className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'Orders'}
          </span>
        </Link>

        <Link onClick={handleLinkClick} className="flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:justify-start sm:gap-4" href="/admin/product">
          <FiBox className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'Products'}
          </span>
        </Link>

        <Link onClick={handleLinkClick} className="flex items-center justify-center min-h-11 touch-manipulation text-sm sm:text-md sm:justify-start sm:gap-4" href="/admin/customer">
          <FiUser className="w-5 h-5 shrink-0" />
          <span className="hidden sm:inline">
            {sideBarOpen && 'Customers'}
          </span>
        </Link>
      </div>
    </div>
  )
}


