'use client'

import React, { useState } from 'react'
import { FiPlus, FiSearch, FiEye, FiX, FiUser, FiShoppingBag, FiMail, FiDollarSign, FiFileText, FiCalendar, } from 'react-icons/fi'

const initialOrders = [
    { id: 'ORD-2026-001', customer: 'Olivia Martinez', email: 'olivia.martinez@example.com', status: 'Completed', price: 249.99, date: 'Mar 28, 2026', note: 'Customer requested standard delivery.', },
    { id: 'ORD-2026-002', customer: 'James Wilson', email: 'james.wilson@example.com', status: 'Processing', price: 89.50, date: 'Mar 28, 2026', note: 'Order is currently being prepared.', },
    { id: 'ORD-2026-003', customer: 'Emma Thompson', email: 'emma.thompson@example.com', status: 'Pending', price: 1245.00, date: 'Mar 27, 2026', note: 'Waiting for payment confirmation.', },
    { id: 'ORD-2026-004', customer: 'Liam Chen', email: 'liam.chen@example.com', status: 'Completed', price: 532.75, date: 'Mar 27, 2026', note: 'Order completed successfully.', },
    { id: 'ORD-2026-005', customer: 'Sophia Rodriguez', email: 'sophia.rodriguez@example.com', status: 'Cancelled', price: 175.00, date: 'Mar 26, 2026', note: 'Customer cancelled the order.', },
    { id: 'ORD-2026-006', customer: 'Noah Patel', email: 'noah.patel@example.com', status: 'Completed', price: 67.25, date: 'Mar 26, 2026', note: 'Delivered to customer.', },
    { id: 'ORD-2026-007', customer: 'Ava Johansson', email: 'ava.johansson@example.com', status: 'Processing', price: 890.00, date: 'Mar 25, 2026', note: 'Preparing items for shipment.', },
    { id: 'ORD-2026-008', customer: 'William Brown', email: 'william.brown@example.com', status: 'Pending', price: 2100.50, date: 'Mar 25, 2026', note: 'Payment has not been received yet.', },
]

const getStatusClass = (status) => {
    if (status === 'Completed') { return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' }

    if (status === 'Processing') { return 'bg-amber-500/10 text-amber-400 border border-amber-500/20' }

    if (status === 'Pending') { return 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' }

    if (status === 'Cancelled') { return 'bg-red-500/10 text-red-400 border border-red-500/20' }

    return 'bg-foreground/5 text-foreground/60'
}

export default function Orders() {
    const [orders, setOrders] = useState(initialOrders)

    const [search, setSearch] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')

    const [showNewOrder, setShowNewOrder] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState(null)

    const [form, setForm] = useState({ customer: '', email: '', status: 'Pending', price: '', note: '', })

    const filteredOrders = orders.filter((order) => {
        const searchValue = search.toLowerCase()

        const matchesSearch =
            order.id.toLowerCase().includes(searchValue) ||
            order.customer.toLowerCase().includes(searchValue) ||
            order.email.toLowerCase().includes(searchValue)

        const matchesStatus =
            statusFilter === 'All' || order.status === statusFilter

        return matchesSearch && matchesStatus
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleCreateOrder = (e) => {
        e.preventDefault()

        if (
            !form.customer.trim() ||
            !form.email.trim() ||
            !form.price
        ) {
            return
        }

        const nextNumber = orders.length + 1

        const newOrder = { id: `ORD-2026-${String(nextNumber).padStart(3, '0')}`, customer: form.customer, email: form.email, status: form.status, price: Number(form.price), date: 'Mar 28, 2026', note: form.note || 'No note added.', }

        setOrders((prev) => [newOrder, ...prev])

        setForm({ customer: '', email: '', status: 'Pending', price: '', note: '', })

        setShowNewOrder(false)
    }

    return (
        <div className='w-full min-h-full p-3 sm:p-5 overflow-x-hidden'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-8'>
                <div>
                    <h1 className='text-primary text-2xl font-semibold'>Orders</h1>
                    <p className='text-foreground/50 text-sm mt-1'>Manage and track customer orders</p>
                </div>
                <button onClick={() => setShowNewOrder(true)} className='w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition touch-manipulation'>
                    <FiPlus size={17} />
                    New Order
                </button>
            </div>
            <div className='w-full bg-surface rounded-2xl overflow-hidden'>
                <div className='p-3 sm:p-4 flex flex-col sm:flex-row gap-3'>
                    <div className='relative w-full sm:max-w-md'>
                        <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40' size={17} />
                        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search orders...' className='w-full h-10 bg-background/40 border border-foreground/10 rounded-xl pl-10 pr-3 text-sm text-foreground outline-none focus:border-primary/50 transition placeholder:text-foreground/30' />
                    </div>
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className='w-full sm:w-36 h-10 bg-background/40 border border-foreground/10 rounded-xl px-3 text-sm text-foreground outline-none focus:border-primary/50'>
                        <option value='All'>All</option>
                        <option value='Completed'>Completed</option>
                        <option value='Processing'>Processing</option>
                        <option value='Pending'>Pending</option>
                        <option value='Cancelled'>Cancelled</option>
                    </select>
                </div>
                <div className='hidden md:block overflow-x-auto'>
                    <table className='w-full min-w-212.5'>
                        <thead>
                            <tr className='bg-foreground/2.5% border-y border-foreground/10'>
                                <th className='text-left px-4 py-3 text-xs font-medium text-foreground/60'>Order #</th>
                                <th className='text-left px-4 py-3 text-xs font-medium text-foreground/60'>Customer</th>
                                <th className='text-left px-4 py-3 text-xs font-medium text-foreground/60'>Status</th>
                                <th className='text-right px-4 py-3 text-xs font-medium text-foreground/60'>Total</th>
                                <th className='text-left px-4 py-3 text-xs font-medium text-foreground/60'>Date</th>
                                <th className='w-14 px-4 py-3'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((order) => (
                                <tr key={order.id} className='border-b border-foreground/10 last:border-0 hover:bg-foreground/2.5% transition'>
                                    <td className='px-4 py-3.5 text-sm font-medium text-foreground'>
                                        {order.id}
                                    </td>
                                    <td className='px-4 py-3.5'>
                                        <div className='text-sm text-foreground'>
                                            {order.customer}
                                        </div>
                                        <div className='text-xs text-foreground/40 mt-0.5'>
                                            {order.email}
                                        </div>
                                    </td>
                                    <td className='px-4 py-3.5'>
                                        <span className={`inline-flex px-2.5 py-1 rounded-lg text-[11px] font-medium ${getStatusClass(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className='px-4 py-3.5 text-right text-sm font-medium text-foreground'>
                                        ${order.price.toLocaleString('en-US', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </td>
                                    <td className='px-4 py-3.5 text-sm text-foreground/60'>
                                        {order.date}
                                    </td>
                                    <td className='px-4 py-3.5'>
                                        <button onClick={() => setSelectedOrder(order)} className='w-8 h-8 flex items-center justify-center rounded-lg text-foreground/50 hover:text-primary hover:bg-primary/10 transition touch-manipulation'>
                                            <FiEye size={17} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='md:hidden'>
                    {filteredOrders.map((order) => (
                        <div key={order.id} className='p-4 border-b border-foreground/10 last:border-0'>
                            <div className='flex items-start justify-between gap-3'>
                                <div className='min-w-0'>
                                    <p className='text-sm font-semibold text-foreground'>
                                        {order.id}
                                    </p>
                                    <p className='text-sm text-foreground/80 mt-1 truncate'>
                                        {order.customer}
                                    </p>
                                    <p className='text-xs text-foreground/40 mt-0.5 truncate'>
                                        {order.email}
                                    </p>
                                </div>
                                <button onClick={() => setSelectedOrder(order)} className='shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-foreground/5 text-foreground/50 hover:text-primary hover:bg-primary/10 transition touch-manipulation'>
                                    <FiEye size={17} />
                                </button>
                            </div>
                            <div className='mt-4 flex flex-wrap items-center justify-between gap-3'>
                                <span className={`inline-flex px-2.5 py-1 rounded-lg text-[11px] font-medium ${getStatusClass(order.status)}`}>
                                    {order.status}
                                </span>
                                <div className='flex items-center gap-4'>
                                    <span className='text-sm font-semibold text-foreground'>
                                        ${order.price.toLocaleString('en-US', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </span>
                                    <span className='text-xs text-foreground/40'>
                                        {order.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {filteredOrders.length === 0 && (
                    <div className='py-14 text-center'>
                        <div className='w-12 h-12 mx-auto rounded-xl bg-foreground/5 flex items-center justify-center text-foreground/30'>
                            <FiSearch size={20} />
                        </div>
                        <p className='text-sm text-foreground/60 mt-3'>No orders found</p>
                        <p className='text-xs text-foreground/30 mt-1'>Try changing your search or filter</p>
                    </div>
                )}
            </div>
            {showNewOrder && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm'
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) { setShowNewOrder(false) }
                    }}>
                    <div className='w-full max-w-lg max-h-[90vh] overflow-y-auto bg-surface rounded-2xl border border-foreground/10 shadow-2xl'>
                        <div className='flex items-center justify-between p-4 sm:p-5 border-b border-foreground/10'>
                            <div>
                                <h2 className='text-lg font-semibold text-foreground'>New Order</h2>
                                <p className='text-xs text-foreground/40 mt-1'>Create a new customer order</p>
                            </div>
                            <button onClick={() => setShowNewOrder(false)} className='w-9 h-9 rounded-lg flex items-center justify-center text-foreground/50 hover:bg-foreground/5 hover:text-foreground transition touch-manipulation'>
                                <FiX size={19} />
                            </button>
                        </div>
                        <form onSubmit={handleCreateOrder} className='p-4 sm:p-5 space-y-4'>
                            <div>
                                <label className='block text-xs font-medium text-foreground/70 mb-2'>Customer Name</label>
                                <div className='relative'>
                                    <FiUser size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30' />
                                    <input name='customer' value={form.customer} onChange={handleChange} type='text' placeholder='Enter customer name' className='w-full h-11 bg-background/40 border border-foreground/10 rounded-xl pl-10 pr-3 text-sm outline-none text-foreground focus:border-primary/50 transition' />
                                </div>
                            </div>
                            <div>
                                <label className='block text-xs font-medium text-foreground/70 mb-2'>Customer Email</label>
                                <div className='relative'>
                                    <FiMail size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30' />
                                    <input name='email' value={form.email} onChange={handleChange} type='email' placeholder='customer@example.com' className='w-full h-11 bg-background/40 border border-foreground/10 rounded-xl pl-10 pr-3 text-sm outline-none text-foreground focus:border-primary/50 transition' />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div>
                                    <label className='block text-xs font-medium text-foreground/70 mb-2'>Status</label>
                                    <select name='status' value={form.status} onChange={handleChange} className='w-full h-11 bg-background/40 border border-foreground/10 rounded-xl px-3 text-sm outline-none text-foreground focus:border-primary/50'>
                                        <option value='Pending'>Pending</option>
                                        <option value='Processing'>Processing</option>
                                        <option value='Completed'>Completed</option>
                                        <option value='Cancelled'>Cancelled</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='block text-xs font-medium text-foreground/70 mb-2'>Price</label>
                                    <div className='relative'>
                                        <FiDollarSign size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30' />
                                        <input name='price' value={form.price} onChange={handleChange} type='number' min='0' step='0.01' placeholder='0.00' className='w-full h-11 bg-background/40 border border-foreground/10 rounded-xl pl-10 pr-3 text-sm outline-none text-foreground focus:border-primary/50' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className='block text-xs font-medium text-foreground/70 mb-2'>Note</label>
                                <div className='relative'>
                                    <FiFileText size={16} className='absolute left-3 top-3 text-foreground/30' />
                                    <textarea name='note' value={form.note} onChange={handleChange} rows={4} placeholder='Add a note about this order...' className='w-full bg-background/40 border border-foreground/10 rounded-xl pl-10 pr-3 py-3 text-sm outline-none text-foreground focus:border-primary/50 resize-none' />
                                </div>
                            </div>
                            <div className='flex flex-col-reverse sm:flex-row gap-2 sm:justify-end pt-2'>
                                <button type='button' onClick={() => setShowNewOrder(false)} className='w-full sm:w-auto px-4 py-2.5 rounded-xl text-sm text-foreground/60 hover:bg-foreground/5 transition touch-manipulation'> Cancel</button>
                                <button type='submit' className='w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition touch-manipulation'> Create Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {selectedOrder && (
                <div className='fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm' onMouseDown={(e) => {
                    if (e.target === e.currentTarget) {
                        setSelectedOrder(null)
                    }
                }}>

                    <div className='w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface rounded-2xl border border-foreground/10 shadow-2xl'>
                        <div className='flex items-center justify-between p-4 sm:p-5 border-b border-foreground/10'>
                            <div>
                                <h2 className='text-lg font-semibold text-foreground'>Order Information</h2>
                                <p className='text-xs text-foreground/40 mt-1'>{selectedOrder.id}</p>
                            </div>
                            <button onClick={() => setSelectedOrder(null)} className='w-9 h-9 rounded-lg flex items-center justify-center text-foreground/50 hover:bg-foreground/5 hover:text-foreground transition touch-manipulation'><FiX size={19} /></button>
                        </div>
                        <div className='p-4 sm:p-5 space-y-5'>
                            <div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <div className='w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center'>
                                        <FiShoppingBag size={16} />
                                    </div>
                                    <h3 className='text-sm font-semibold text-foreground'>Order Information</h3>
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                    <div className='bg-background/30 border border-foreground/10 rounded-xl p-3'>
                                        <p className='text-[11px] text-foreground/40 mb-1'>Order ID</p>
                                        <p className='text-sm font-medium text-foreground'>{selectedOrder.id}</p>
                                    </div>
                                    <div className='bg-background/30 border border-foreground/10 rounded-xl p-3'>
                                        <p className='text-[11px] text-foreground/40 mb-1'>Status</p>
                                        <span className={`inline-flex px-2.5 py-1 rounded-lg text-[11px] font-medium ${getStatusClass(selectedOrder.status)}`}>{selectedOrder.status}</span>
                                    </div>
                                    <div className='bg-background/30 border border-foreground/10 rounded-xl p-3'>
                                        <p className='text-[11px] text-foreground/40 mb-1'>Total Price</p>
                                        <p className='text-sm font-semibold text-foreground'> ${selectedOrder.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2, })}</p>
                                    </div>
                                    <div className='bg-background/30 border border-foreground/10 rounded-xl p-3'>
                                        <p className='text-[11px] text-foreground/40 mb-1'>Date</p>
                                        <div className='flex items-center gap-2'>
                                            <FiCalendar size={14} className='text-foreground/40' />
                                            <p className='text-sm text-foreground'>{selectedOrder.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <div className='w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center'>
                                        <FiUser size={16} />
                                    </div>
                                    <h3 className='text-sm font-semibold text-foreground'>Customer Information</h3>
                                </div>
                                <div className='bg-background/30 border border-foreground/10 rounded-xl p-4 space-y-4'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-10 h-10 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center'>
                                            <FiUser size={18} />
                                        </div>
                                        <div className='min-w-0'>
                                            <p className='text-sm font-medium text-foreground'>{selectedOrder.customer}</p>
                                            <div className='flex items-center gap-1.5 mt-1 text-xs text-foreground/40'>
                                                <FiMail size={12} />
                                                <span className='truncate'>{selectedOrder.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-2 mb-3'>
                                    <div className='w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center'>
                                        <FiFileText size={16} />
                                    </div>
                                    <h3 className='text-sm font-semibold text-foreground'>Note</h3>
                                </div>
                                <div className='bg-background/30 border border-foreground/10 rounded-xl p-4'>
                                    <p className='text-sm leading-6 text-foreground/60'>
                                        {selectedOrder.note}
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Footer */}
                        <div className='p-4 sm:p-5 border-t border-foreground/10 flex justify-end'>
                            <button onClick={() => setSelectedOrder(null)} className='w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition touch-manipulation'>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}