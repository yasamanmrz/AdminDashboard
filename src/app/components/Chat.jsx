'use client'

import React from 'react'
import { FiSearch, FiSend, FiSettings } from 'react-icons/fi'

const contacts = [
    { id: 1, name: 'Elena Vasquez', initials: 'EV', message: 'Sure, I’ll send the updated mock...', time: '10:42 AM', count: 2, online: true, active: true, },
    { id: 2, name: 'Marcus Chen', initials: 'MC', message: 'The deployment went through succes...', time: '10:15 AM', count: null, online: true, active: false, },
    { id: 3, name: 'Sofia Andersson', initials: 'SA', message: 'Can we reschedule the standup ...', time: '9:50 AM', count: 1, online: false, active: false, },
    { id: 4, name: 'James Okafor', initials: 'JO', message: "I've reviewed the PR, left some comm...", time: 'Yesterday', count: null, online: false, active: false, },
    { id: 5, name: 'Priya Sharma', initials: 'PS', message: 'The client approved the proposal.', time: 'Yesterday', count: 3, online: true, active: false, },
    { id: 6, name: 'Daniel Wright', initials: 'DW', message: 'Let me check the analytics dashboard', time: 'Yesterday', count: null, online: false, active: false, },
    { id: 7, name: 'Aisha Nkosi', initials: 'AN', message: 'Meeting notes are in the shared drive', time: 'Mar 27', count: null, online: false, active: false, },
]
const messages = [
    { id: 1, type: 'received', message: 'Of course. I just need to polish the responsive breakpoints', time: '9:45 AM', },
    { id: 2, type: 'sent', message: 'Awesome. Can you share them before the design review?', time: '9:38 AM', },
    { id: 3, type: 'sent', message: 'No rush, but ideally before 4pm so I can review tonight', time: '10:00 AM', },
    { id: 4, type: 'received', message: 'Sure, I’ll send the updated mockups by 3pm', time: '10:42 AM', },
    { id: 5, type: 'received', message: 'Also, should I include the dark mode variants?', time: '10:42 AM', },
]


export default function Chat() {
    return (
        <div className='w-full p-3 sm:p-5 overflow-x-hidden'>
            <div className='mb-5 sm:mb-8'>
                <h1 className='text-primary text-2xl font-semibold'>Chat</h1>
                <p className='text-foreground/50 text-sm'>Messages and conversations</p>
            </div>
            <div className='w-full h-[calc(100vh-180px)] min-h-00 sm:min-h-125 bg-surface rounded-2xl overflow-hidden flex border border-foreground/10'>
                <div className='w-full sm:w-[35%] lg:w-[32%] border-r border-foreground/10 flex flex-col'>
                    <div className='p-3 sm:p-4'>
                        <div className='h-10 w-full border border-foreground/20 rounded-xl flex items-center gap-2 px-3'>
                            <FiSearch className=' w-4 h-4 text-foreground/50 shrink-0' />
                            <input type='text' placeholder='Search contacts...' className='w-full bg-transparent outline-none text-sm text-foreground placeholder:text-foreground/40' />
                        </div>
                    </div>
                    <div className='flex-1 overflow-y-auto'>
                        {contacts.map((contact) => (
                            <div key={contact.id} className={`flex items-center gap-3 px-3 sm:px-4 py-3 border-b border-foreground/10 cursor-pointer hover:bg-foreground/5 ${contact.active ? 'bg-foreground/10' : ''}`}>
                                <div className='relative shrink-0'>
                                    <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-medium text-foreground/70'>
                                        {contact.initials}
                                    </div>
                                    {contact.online && (
                                        <span className='absolute right-0 bottom-0 w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface' />
                                    )}
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <div className='flex items-center justify-between gap-2'>
                                        <h3 className='text-sm font-semibold text-foreground truncate'>{contact.name}</h3>
                                        <span className='text-[10px] sm:text-xs text-foreground/50 whitespace-nowrap'>{contact.time}</span>
                                    </div>
                                    <div className='flex items-center justify-between gap-2'>
                                        <p className='text-xs text-foreground/50 truncate'>{contact.message}</p>
                                        {contact.count && (
                                            <span className='w-5 h-5 shrink-0 rounded-full bg-primary text-white text-[10px] flex items-center justify-center'>{contact.count}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='hidden sm:flex w-[65%] lg:w-[68%] flex-col'>
                    <div className='h-20 shrink-0 px-4 sm:px-6 flex items-center gap-3 border-b border-foreground/10'>
                        <div className='relative'>
                            <div className='w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-sm font-medium text-foreground/70'> EV</div>
                            <span className='absolute right-0 bottom-0 w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface' />
                        </div>
                        <div>
                            <h3 className='text-sm font-semibold text-foreground'>Elena Vasquez</h3>
                            <p className='text-xs text-foreground/50'>Online</p>
                        </div>
                    </div>
                    <div className='flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-3'>
                        {messages.map((item) => (
                            <div key={item.id} className={` flex ${item.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[75%] sm:max-w-[65%] px-4 py-3 rounded-2xl ${item.type === 'sent' ? 'bg-primary text-white rounded-br-md' : 'bg-foreground/10 text-foreground rounded-bl-md'}`}>
                                    <p className='text-xs sm:text-sm leading-relaxed'>{item.message}</p>
                                    <span className={`block text-[9px] mt-1 ${item.type === 'sent' ? 'text-white/70' : 'text-foreground/40'}`}>{item.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='shrink-0 p-3 sm:p-4 border-t border-foreground/10'>
                        <div className='flex items-center gap-2'>
                            <div className='flex-1 h-10 rounded-xl border border-foreground/20 flex items-center px-3'>
                                <input type='text' placeholder='Type a message...' className='w-full bg-transparent outline-none text-sm text-foreground placeholder:text-foreground/40' />
                            </div>
                            <button className='w-10 h-10 shrink-0 rounded-xl bg-primary text-white flex items-center justify-center hover:opacity-90 transition'>
                                <FiSend className='w-4 h-4' />
                            </button>
                            <button className='hidden sm:flex w-10 h-10 shrink-0 rounded-xl bg-primary/10 text-primary items-center justify-center hover:bg-primary/20 transition'>
                                <FiSettings className='w-4 h-4' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}