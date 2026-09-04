'use client'

import React, { useState } from 'react'
import { FiCheckCircle, FiMessageCircle, FiUserPlus, FiShoppingBag, FiFileText, FiAlertCircle, FiHeart, FiClock, } from 'react-icons/fi'

const todayNotifications = [
    { id: 1, icon: FiMessageCircle, title: 'New message received', description: 'Alex Rivera sent you a new message', time: '1 hour ago', },
    { id: 2, icon: FiCheckCircle, title: 'Task completed', description: 'The website redesign task has been completed', time: '2 hours ago', },
    { id: 3, icon: FiUserPlus, title: 'New team member', description: 'Emma Wilson joined your team', time: '3 hours ago', },
    { id: 4, icon: FiShoppingBag, title: 'New order received', description: 'You received a new order from John Smith', time: '5 hours ago', },
    { id: 5, icon: FiFileText, title: 'New report available', description: 'Your weekly performance report is ready', time: '6 hours ago', },
]

const yesterdayNotifications = [
    { id: 6, icon: FiAlertCircle, title: 'Payment failed', description: 'The payment for your subscription could not be processed', time: 'Yesterday', },
    { id: 7, icon: FiMessageCircle, title: 'New comment', description: 'Sophia commented on your latest project', time: 'Yesterday', },
    { id: 8, icon: FiHeart, title: 'New reaction', description: 'Daniel liked your recent post', time: 'Yesterday', },
    { id: 9, icon: FiUserPlus, title: 'New follower', description: 'Michael started following you', time: 'Yesterday', },
    { id: 10, icon: FiCheckCircle, title: 'Project completed', description: 'Your mobile application project was completed', time: 'Yesterday', },
    { id: 11, icon: FiClock, title: 'Reminder', description: 'You have a meeting scheduled for tomorrow', time: 'Yesterday', },
]

export default function Notification() {
    const [activeTab, setActiveTab] = useState('all')

    const allNotifications = [
        ...todayNotifications,
        ...yesterdayNotifications,
    ]

    const unreadNotifications = allNotifications.slice(0, 4)

    const notifications = activeTab === 'all' ? allNotifications : unreadNotifications

    const today = activeTab === 'all' ? todayNotifications : todayNotifications.filter(item => unreadNotifications.some(notification => notification.id === item.id))

    const yesterday = activeTab === 'all' ? yesterdayNotifications : yesterdayNotifications.filter(item => unreadNotifications.some(notification => notification.id === item.id))

    return (
        <div className='w-full p-3 sm:p-5 overflow-x-hidden'>
            <div className='mb-5 sm:mb-8'>
                <h1 className='text-primary text-2xl font-semibold'>Notification</h1>
                <p className='text-foreground/50 text-sm mt-1'>Stay up to date with your team activity</p>
            </div>
            <div className='w-full bg-surface rounded-2xl overflow-hidden'>
                <div className='flex items-center gap-2 p-3 sm:p-5 border-b border-foreground/10'>
                    <button onClick={() => setActiveTab('all')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'all' ? 'bg-primary text-white' : 'text-foreground/60 hover:bg-foreground/5'}`}>
                        All
                    </button>
                    <button onClick={() => setActiveTab('unread')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'unread' ? 'bg-primary text-white' : 'text-foreground/60 hover:bg-foreground/5'}`}>
                        Unread
                    </button>
                </div>
                <div className='p-3 sm:p-5'>
                    {today.length > 0 && (
                        <div className='mb-7 sm:mb-9'>
                            <h2 className='text-sm font-semibold text-foreground mb-3 sm:mb-4'>Today</h2>
                            <div className='space-y-2'>
                                {today.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <div key={item.id} className='w-full flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-foreground/10 hover:bg-foreground/5 transition-all'>
                                            <div className='shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/10 flex items-center justify-center'>
                                                <Icon className='text-primary text-lg sm:text-xl' />
                                            </div>
                                            <div className='min-w-0 flex-1'>
                                                <h3 className='text-sm sm:text-base font-medium text-foreground truncate'>{item.title}</h3>

                                                <p className='text-xs sm:text-sm text-foreground/50 mt-1 leading-5'>{item.description}</p>
                                            </div>
                                            <div className='shrink-0 text-right'>
                                                <span className='text-[11px] sm:text-xs text-foreground/40 whitespace-nowrap'>{item.time}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    {yesterday.length > 0 && (
                        <div>
                            <h2 className='text-sm font-semibold text-foreground mb-3 sm:mb-4'>Yesterday</h2>
                            <div className='space-y-2'>
                                {yesterday.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <div key={item.id} className='w-full flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-foreground/10 hover:bg-foreground/5 transition-all'>
                                            <div className='shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/10 flex items-center justify-center'>
                                                <Icon className='text-primary text-lg sm:text-xl' />
                                            </div>
                                            <div className='min-w-0 flex-1'>
                                                <h3 className='text-sm sm:text-base font-medium text-foreground truncate'>{item.title}</h3>
                                                <p className='text-xs sm:text-sm text-foreground/50 mt-1 leading-5'>{item.description}</p>
                                            </div>
                                            <div className='shrink-0 text-right'>
                                                <span className='text-[11px] sm:text-xs text-foreground/40 whitespace-nowrap'>{item.time}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}