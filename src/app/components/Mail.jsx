'use client'

import React, { useState } from 'react'
import { FiArchive, FiEdit3, FiInbox, FiMail, FiMoreVertical, FiArrowRightCircle, FiSearch, FiSend, FiTrash2, FiX, } from 'react-icons/fi'

const mailData = {
    Inbox: [
        { id: 1, name: 'Elena Vasquez', email: 'elena@example.com', subject: 'Updated project proposal', message: 'Hi, I have attached the updated project proposal for your review. Let me know if you have any feedback or changes.', date: 'Aug 28, 2026', time: '10:42 AM', },
        { id: 2, name: 'Marcus Chen', email: 'marcus@example.com', subject: 'Meeting reminder', message: 'Just a quick reminder about our meeting tomorrow at 10:00 AM. Looking forward to discussing the next steps.', date: 'Aug 28, 2026', time: '09:30 AM', },
        { id: 3, name: 'Sarah Williams', email: 'sarah@example.com', subject: 'Your monthly report', message: 'Your monthly performance report is ready. You can review all the details and statistics in the attached document.', date: 'Aug 27, 2026', time: '04:15 PM', },
        { id: 4, name: 'James Anderson', email: 'james@example.com', subject: 'Design feedback', message: 'I reviewed the latest design and everything looks great. I only have a few small suggestions before we finalize it.', date: 'Aug 27, 2026', time: '01:20 PM', },
    ],

    Sent: [
        { id: 5, name: 'You', email: 'you@example.com', subject: 'Project update', message: 'Hi Daniel, here is the latest update regarding the project. Everything is progressing according to schedule.', date: 'Aug 27, 2026', time: '11:40 AM', },
        { id: 6, name: 'You', email: 'you@example.com', subject: 'Design files', message: 'I have sent the latest design files for your review. Please let me know if you need anything else.', date: 'Aug 26, 2026', time: '03:25 PM', },
        { id: 7, name: 'You', email: 'you@example.com', subject: 'Weekly meeting', message: 'Thanks for joining the weekly meeting. I have attached the notes and action items we discussed.', date: 'Aug 25, 2026', time: '10:10 AM', },
    ],

    Drafts: [
        { id: 8, name: 'Olivia Martin', email: 'olivia@example.com', subject: 'Invoice question', message: 'Hi Olivia, I wanted to ask you about the invoice we received this month. I noticed that...', date: 'Aug 27, 2026', time: '05:10 PM', },
        { id: 9, name: 'Daniel Brown', email: 'daniel@example.com', subject: 'Team announcement', message: 'Hi Daniel, I wanted to share a quick announcement with the team regarding our upcoming...', date: 'Aug 26, 2026', time: '02:40 PM', },
    ],

    Trash: [
        { id: 10, name: 'Michael Scott', email: 'michael@example.com', subject: 'Old notification', message: 'This is an old notification email that has been moved to the trash.', date: 'Aug 20, 2026', time: '09:15 AM', },
        { id: 11, name: 'John Smith', email: 'john@example.com', subject: 'Old newsletter', message: 'This newsletter has been moved to the trash and is no longer needed.', date: 'Aug 18, 2026', time: '08:30 AM', },
    ],
}

const menuItems = [
    { name: 'Inbox', icon: FiInbox, count: 4, },
    { name: 'Sent', icon: FiSend, },
    { name: 'Drafts', icon: FiEdit3, count: 2, },
    { name: 'Trash', icon: FiTrash2, },
]

export default function Mail() {
    const [activeFolder, setActiveFolder] = useState('Inbox')
    const [selectedMail, setSelectedMail] = useState(mailData.Inbox[0])
    const [search, setSearch] = useState('')
    const [showCompose, setShowCompose] = useState(false)

    const currentMails = mailData[activeFolder].filter((mail) => {
        const searchText =
            `${mail.name} ${mail.subject} ${mail.message}`.toLowerCase()

        return searchText.includes(search.toLowerCase())
    })

    const handleFolderChange = (folder) => {
        setActiveFolder(folder)
        setSearch('')

        if (mailData[folder].length > 0) {
            setSelectedMail(mailData[folder][0])
        } else {
            setSelectedMail(null)
        }
    }

    return (
        <div className='w-full p-3 sm:p-5 overflow-x-hidden'>
            <div className='mb-5 sm:mb-8'>
                <h1 className='text-primary text-2xl font-semibold'>Mail</h1>
                <p className='text-foreground/50 text-sm'>Inbox and messages</p>
            </div>
            <div className='w-full h-[calc(100vh-180px)] min-h-125 bg-surface rounded-2xl overflow-hidden flex border border-foreground/10'>
                <aside className='w-55 shrink-0 border-r border-foreground/10 p-4 hidden md:block'>
                    <button onClick={() => setShowCompose(true)} className='w-full flex items-center justify-center gap-2 bg-primary text-white rounded-xl py-2.5 text-sm font-medium hover:opacity-90 transition mb-6'>
                        <FiEdit3 size={16} />
                        Compose
                    </button>
                    <div className='space-y-1'>
                        {menuItems.map((item) => {
                            const Icon = item.icon
                            const active = activeFolder === item.name
                            return (
                                <button key={item.name} onClick={() => handleFolderChange(item.name)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition ${active ? 'bg-primary/10 text-primary' : 'text-foreground/60 hover:bg-foreground/5 hover:text-foreground'}`}>
                                    <Icon size={17} />
                                    <span className='flex-1 text-left'>{item.name}</span>
                                    {item.count && (
                                        <span className='text-xs'>{item.count}</span>
                                    )}
                                </button>
                            )
                        })}

                    </div>
                </aside>
                <section className='w-80 lg:w-95 shrink-0 border-r border-foreground/10 flex flex-col'>
                    <div className='p-4 border-b border-foreground/10'>
                        <div className='flex items-center justify-between mb-4'>
                            <div>
                                <h2 className='text-lg font-semibold'>{activeFolder}</h2>
                                <p className='text-xs text-foreground/40 mt-1'>{currentMails.length} messages</p>
                            </div>
                            <button className='p-2 rounded-lg hover:bg-foreground/5'>
                                <FiMoreVertical size={17} />
                            </button>
                        </div>
                        <div className='relative'>
                            <FiSearch size={17} className='absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40' />
                            <input type='text' placeholder='Search mail...' value={search} onChange={(e) => setSearch(e.target.value)} className='w-full bg-foreground/5 rounded-xl pl-9 pr-3 py-2.5 text-sm outline-none placeholder:text-foreground/40 focus:ring-1 focus:ring-primary/30' />
                        </div>
                    </div>
                    <div className='flex-1 overflow-y-auto'>
                        {currentMails.length > 0 ? (
                            currentMails.map((mail) => (
                                <button key={mail.id} onClick={() => setSelectedMail(mail)} className={` w-full text-left p-4 border-b border-foreground/10 transition ${selectedMail?.id === mail.id ? 'bg-primary/5' : 'hover:bg-foreground/5'}`}>
                                    <div className='flex gap-3'>
                                        <div className='w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold shrink-0'>
                                            {mail.name.split(' ').map((word) => word[0]).join('').slice(0, 2)}
                                        </div>
                                        <div className='min-w-0 flex-1'>
                                            <div className='flex items-center justify-between gap-2'>
                                                <h3 className='text-sm font-semibold truncate'>{mail.name}</h3>
                                                <span className='text-[10px] text-foreground/40 shrink-0'>{mail.time}</span>
                                            </div>
                                            <p className='text-sm font-medium truncate mt-1'>{mail.subject}</p>
                                            <p className='text-xs text-foreground/40 truncate mt-1'>{mail.message}</p>
                                        </div>
                                    </div>
                                </button>
                            ))
                        ) : (

                            <div className='h-full flex items-center justify-center p-5 text-center'>
                                <div>
                                    <FiMail size={30} className='mx-auto text-foreground/20 mb-3' />
                                    <p className='text-sm text-foreground/40'>No emails found</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                <main className='flex-1 min-w-0 flex flex-col'>
                    {selectedMail ? (
                        <>
                            <div className='h-16 px-5 border-b border-foreground/10 flex items-center justify-between shrink-0'>
                                <div className='flex items-center gap-2'>
                                    <button className='p-2 rounded-lg hover:bg-foreground/5 text-foreground/60 hover:text-foreground' title='Archive'>
                                        <FiArchive size={17} />
                                    </button>
                                    <button className='p-2 rounded-lg hover:bg-foreground/5 text-red-500' title='Remove'>
                                        <FiTrash2 size={17} />
                                    </button>
                                </div>
                                <button className='p-2 rounded-lg hover:bg-foreground/5'>
                                    <FiMoreVertical size={18} />
                                </button>
                            </div>
                            <div className='flex-1 overflow-y-auto p-5 sm:p-8'>
                                <div className='max-w-4xl mx-auto'>
                                    <h1 className='text-xl sm:text-2xl font-semibold mb-7'>{selectedMail.subject}</h1>
                                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-foreground/10'>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold'>
                                                {selectedMail.name.split(' ').map((word) => word[0]).join('').slice(0, 2)}
                                            </div>
                                            <div>
                                                <p className='text-sm font-semibold'>{selectedMail.name}</p>
                                                <p className='text-xs text-foreground/40 mt-1'>{selectedMail.email}</p>
                                            </div>
                                        </div>
                                        <div className='text-left sm:text-right'>
                                            <p className='text-xs text-foreground/60'>{selectedMail.date}</p>
                                            <p className='text-[11px] text-foreground/40 mt-1'>{selectedMail.time}</p>
                                        </div>
                                    </div>
                                    <div className='py-7'>
                                        <p className='text-sm sm:text-base text-foreground/70 leading-7'>Hi,</p>
                                        <p className='text-sm sm:text-base text-foreground/70 leading-7 mt-5'>{selectedMail.message}</p>
                                        <p className='text-sm sm:text-base text-foreground/70 leading-7 mt-5'>Please let me know if you have any questions or if you need any additional information.</p>
                                        <p className='text-sm sm:text-base text-foreground/70 leading-7 mt-8'>
                                            Best regards,
                                            <br />
                                            {selectedMail.name}
                                        </p>
                                    </div>
                                    <div className='border-t border-foreground/10 pt-5 mt-5'>
                                        <textarea placeholder='Write a reply...' className='w-full min-h-30 resize-none bg-foreground/5 rounded-xl p-4 text-sm outline-none placeholder:text-foreground/40 focus:ring-1 focus:ring-primary/30' />
                                        <div className='flex justify-end mt-3'>
                                            <button className='flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition'>
                                                <FiArrowRightCircle size={15} />
                                                Reply
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (<div className='flex-1 flex items-center justify-center'>
                        <div className='text-center text-foreground/40'>
                            <FiMail size={40} className='mx-auto mb-3 opacity-30' />
                            <p className='text-sm'>Select an email to read</p>
                        </div>
                    </div>

                    )}
                </main>
            </div>
            {showCompose && (
                <div className='fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4'>
                    <div className='w-full max-w-xl bg-surface rounded-2xl shadow-2xl overflow-hidden border border-foreground/10'>
                        <div className='flex items-center justify-between px-5 py-4 border-b border-foreground/10'>
                            <div>
                                <h2 className='font-semibold text-lg'>
                                    New Message
                                </h2>
                                <p className='text-xs text-foreground/40 mt-1'>
                                    Compose a new email
                                </p>
                            </div>

                            <button onClick={() => setShowCompose(false)} className='p-2 rounded-lg hover:bg-foreground/5'>
                                <FiX size={18} />
                            </button>

                        </div>
                        <div className='p-5 space-y-4'>
                            <div>
                                <label className='text-xs text-foreground/50 block mb-2'>
                                    To
                                </label>
                                <input type='email' placeholder='recipient@example.com' className='w-full bg-foreground/5 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-primary/30' />
                            </div>

                            <div>
                                <label className='text-xs text-foreground/50 block mb-2'>
                                    Subject
                                </label>
                                <input type='text' placeholder='Email subject' className='w-full bg-foreground/5 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-primary/30' />
                            </div>
                            <div>
                                <label className='text-xs text-foreground/50 block mb-2'>
                                    Message
                                </label>
                                <textarea placeholder='Write your message...' className='w-full h-40 resize-none bg-foreground/5 rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-primary/30' />
                            </div>

                        </div>
                        <div className='px-5 py-4 border-t border-foreground/10 flex items-center justify-end gap-2'>
                            <button onClick={() => setShowCompose(false)} className='px-4 py-2.5 rounded-xl text-sm text-foreground/60 hover:bg-foreground/5'>Cancel</button>
                            <button onClick={() => setShowCompose(false)} className='flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition'><FiSend size={15} /> Send</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}