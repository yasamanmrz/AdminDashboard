'use client'

import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiPlus, FiX,} from 'react-icons/fi'

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December',]

export default function Calender() {
    const today = new Date()
    const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
    const [showModal, setShowModal] = useState(false)
    const [events, setEvents] = useState([])
    const [formData, setFormData] = useState({ title: '', startDate: '', endDate: '', description: '',})
    useEffect(() => {
        const savedEvents = localStorage.getItem('calendar-events')
        if (savedEvents) {
            setEvents(JSON.parse(savedEvents))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('calendar-events', JSON.stringify(events))
    }, [events])

    const previousMonth = () => {setCurrentDate( new Date( currentDate.getFullYear(), currentDate.getMonth() - 1, 1 ))}
    const nextMonth = () => { setCurrentDate( new Date( currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
    const firstDay = new Date( currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
    const daysInMonth = new Date( currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
    const previousMonthDays = new Date( currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()
    const calendarDays = []

    for (let i = firstDay - 1; i >= 0; i--) {calendarDays.push({ day: previousMonthDays - i, currentMonth: false,})}

    for (let i = 1; i <= daysInMonth; i++) { calendarDays.push({ day: i, currentMonth: true,})}

    const remainingDays = 42 - calendarDays.length

    for (let i = 1; i <= remainingDays; i++) { calendarDays.push({ day: i, currentMonth: false,})}

    const getDateString = (day) => {
        const year = currentDate.getFullYear()
        const month = String(currentDate.getMonth() + 1).padStart(2, '0')
        const date = String(day).padStart(2, '0')

        return `${year}-${month}-${date}`
    }

    const isToday = (day) => {
        return (
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear()
        )
    }

    const getEventsForDate = (day) => {
        const dateString = getDateString(day)

        return events.filter(
            (event) => event.startDate === dateString
        )
    }


    const handleAddEvent = (e) => {
        e.preventDefault()

        if (!formData.title || !formData.startDate) {
            return
        }

        const newEvent = { id: Date.now(), title: formData.title, startDate: formData.startDate, endDate: formData.endDate, description: formData.description,}

        setEvents((prev) => [...prev, newEvent])

        setFormData({ title: '', startDate: '', endDate: '', description: '',})

        setShowModal(false)
    }

    return (
        <div className='w-full p-3 sm:p-5 overflow-x-hidden'>
            <div className='mb-5 sm:mb-8 flex items-end justify-between gap-2 sm:gap-4'>
                <div>
                    <h1 className='text-primary text-2xl font-semibold'>Calendar</h1>
                    <p className='text-foreground/50 text-sm'>Schedule and manage events</p>
                </div>
                <button onClick={() => setShowModal(true)} className='flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:opacity-90 transition shrink-0'>
                    <FiPlus size={17} />
                    <span>New Event</span>
                </button>
            </div>
            <div className='w-full min-h-[calc(100vh-180px)] bg-surface rounded-2xl overflow-hidden flex flex-col border border-foreground/10'>
                <div className='p-4 sm:p-5 border-b border-foreground/10 flex items-center justify-between'>
                    <div>
                        <h2 className='text-foreground text-lg sm:text-xl font-semibold'>
                            {monthNames[currentDate.getMonth()]}{' '}
                            {currentDate.getFullYear()}
                        </h2>
                        <p className='text-foreground/40 text-xs sm:text-sm mt-1'>Manage your schedule</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button onClick={previousMonth} className='w-9 h-9 flex items-center justify-center rounded-lg border border-foreground/10 text-foreground/60 hover:bg-foreground/5 hover:text-foreground transition'>
                            <FiChevronLeft size={18} />
                        </button>
                        <button onClick={nextMonth} className='w-9 h-9 flex items-center justify-center rounded-lg border border-foreground/10 text-foreground/60 hover:bg-foreground/5 hover:text-foreground transition'>
                            <FiChevronRight size={18} />
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-7 border-b border-foreground/10'>
                    {weekDays.map((day) => (
                        <div key={day} className='h-10 sm:h-12 flex items-center justify-center text-xs sm:text-sm font-medium text-foreground/50 border-r border-foreground/10 last:border-r-0'>{day}</div>
                    ))}
                </div>
                <div className='grid grid-cols-7 flex-1'>
                    {calendarDays.map((item, index) => {
                        const dayEvents = item.currentMonth? getEventsForDate(item.day): []
                        return (
                            <div
                                key={index}
                                className={`min-h-25 sm:min-h-30 lg:min-h-35 p-1.5 sm:p-2 border-r border-b border-foreground/10 overflow-hidden ${!item.currentMonth? 'bg-foreground/1.5': ''}`}>
                                <div className='flex justify-between items-start'>
                                    <span className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm ${isToday(item.day) && item.currentMonth ? 'bg-primary text-white font-semibold' : item.currentMonth ? 'text-foreground' : 'text-foreground/20'}`}>
                                        {item.day}
                                    </span>
                                </div>
                                <div className='mt-1 sm:mt-2 flex flex-col gap-1'>
                                    {dayEvents.map((event) => (
                                        <div key={event.id} className='px-1.5 sm:px-2 py-1 rounded-md bg-primary/10 text-primary text-[10px] sm:text-xs font-medium truncate' title={event.description}>
                                            {event.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {showModal && (
                <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm'>
                    <div className='w-full max-w-lg bg-surface rounded-2xl border border-foreground/10 shadow-2xl'>
                        <div className='flex items-center justify-between px-5 py-4 border-b border-foreground/10'>
                            <div>
                                <h2 className='text-foreground text-lg font-semibold'>New Event</h2>
                                <p className='text-foreground/40 text-xs mt-1'>Create a new event for your calendar</p>
                            </div>
                            <button onClick={() => setShowModal(false)} className='w-9 h-9 flex items-center justify-center rounded-lg text-foreground/50 hover:bg-foreground/5 hover:text-foreground transition'>
                                <FiX size={19} />
                            </button>
                        </div>
                        <form onSubmit={handleAddEvent} className='p-5 space-y-4'>
                            <div>
                                <label className='block text-sm font-medium text-foreground mb-2'>Title</label>
                                <input type='text' placeholder='Enter event title' value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value,})}className='w-full h-11 px-3 rounded-xl bg-background border border-foreground/10 text-foreground text-sm outline-none focus:border-primary transition'/>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label className='block text-sm font-medium text-foreground mb-2'>Start Date</label>
                                    <input type='date' value={formData.startDate} onChange={(e) => setFormData({...formData,startDate: e.target.value,})}className='w-full h-11 px-3 rounded-xl bg-background border border-foreground/10 text-foreground text-sm outline-none focus:border-primary transition'/>
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-foreground mb-2'>End Date</label>
                                    <input type='date' value={formData.endDate} onChange={(e) =>setFormData({...formData,endDate: e.target.value,})}className='w-full h-11 px-3 rounded-xl bg-background border border-foreground/10 text-foreground text-sm outline-none focus:border-primary transition'/>
                                </div>
                            </div> 
                            <div>
                                <label className='block text-sm font-medium text-foreground mb-2'>Description</label>
                                <textarea rows='4' placeholder='Enter event description' value={formData.description} onChange={(e) =>setFormData({...formData,description: e.target.value,})} className='w-full px-3 py-2.5 rounded-xl bg-background border border-foreground/10 text-foreground text-sm outline-none resize-none focus:border-primary transition'/>
                            </div>
                            <div className='flex items-center justify-end gap-3 pt-2'>
                                <button type='button'onClick={() => setShowModal(false)}className='px-4 py-2.5 rounded-xl border border-foreground/10 text-foreground/60 text-sm font-medium hover:bg-foreground/5 transition'>
                                    Cancel
                                </button>
                                <button type='submit' className='px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:opacity-90 transition'>
                                    Add Event
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    )
}