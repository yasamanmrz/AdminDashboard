'use client'

import React, { useState } from 'react'
import { FiPlus, FiSearch, FiEye, FiX, FiUser, FiShoppingBag, FiMail, FiDollarSign, FiFileText, FiCalendar, } from 'react-icons/fi'

const initialOrders = [
  { id: 'OM', customer: 'Olivia Martinez', email: 'olivia.martinez@example.com', status: 'Active', company: '	Brightwave Digital', total: '12' },
  { id: 'JW', customer: 'James Wilson', email: 'james.wilson@example.com', status: 'Inactive', company: 'Apex Solutions', total: '8' },
  { id: 'ET', customer: 'Emma Thompson', email: 'emma.thompson@example.com', status: 'Inactive', company: 'Sterling & Partners	', total: '24' },
  { id: 'LC', customer: 'Liam Chen', email: 'liam.chen@example.com', status: 'Inactive', company: 'TechStart Inc.', total: '3' },
  { id: 'SR', customer: 'Sophia Rodriguez', email: 'sophia.rodriguez@example.com', status: 'Active', company: 'DesignHub Studio', total: '5' },
  { id: 'NP', customer: 'Noah Patel', email: 'noah.patel@example.com', status: 'Active', company: '	Patel Commerce', total: '10' },
  { id: 'AJ', customer: 'Ava Johansson', email: 'ava.johansson@example.com', status: 'Active', company: 'Nordic Works AB', total: '18' },
  { id: 'WB', customer: 'William Brown', email: 'william.brown@example.com', status: 'Active', company: 'Enterprise Global', total: '9' },
]

const getStatusClass = (status) => {
  switch (status) {
    case 'Active':
      return 'bg-green-500/10 text-green-400'

    case 'Inactive':
      return 'bg-red-500/10 text-red-400'

    default:
      return 'bg-foreground/10 text-foreground/50'
  }
}

export default function Customers() {

  const [orders, setOrders] = useState(initialOrders)

  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const [showNewOrder, setShowNewOrder] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null)

  const [form, setForm] = useState({ customer: '', email: '', status: 'Pending', price: '', note: '', })

  const filteredOrders = initialOrders.filter((customer) => {
    const matchesSearch =
      customer.customer.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase()) ||
      customer.company.toLowerCase().includes(search.toLowerCase())

    const matchesStatus =
      statusFilter === 'All' ||
      customer.status === statusFilter

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

    const newOrder = {
      id: `ORD-2026-${String(nextNumber).padStart(3, '0')}`,
      customer: form.customer,
      email: form.email,
      status: form.status,
      price: Number(form.price),
      date: 'Mar 28, 2026',
      note: form.note || 'No note added.',
    }

    setOrders((prev) => [newOrder, ...prev])

    setForm({
      customer: '',
      email: '',
      status: 'Pending',
      price: '',
      note: '',
    })

    setShowNewOrder(false)
  }

  return (
    <div>
      <div className='w-full min-h-full p-3 sm:p-5 overflow-x-hidden'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-8'>
          <div>
            <h1 className='text-primary text-2xl font-semibold'>Customers</h1>
            <p className='text-foreground/50 text-sm mt-1'>Manage your customer database</p>
          </div>
          <button onClick={() => setShowNewOrder(true)} className='w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition'>
            <FiPlus size={17} />
            New Customer
          </button>
        </div>
        <div className='w-full bg-surface rounded-2xl overflow-hidden'>
          <div className='p-3 sm:p-4 flex flex-col sm:flex-row gap-3'>
            <div className='relative w-full sm:max-w-md'>
              <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40' size={17} />
              <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search customer...' className='w-full h-10 bg-background/40 border border-foreground/10 rounded-xl pl-10 pr-3 text-sm text-foreground outline-none focus:border-primary/50 transition placeholder:text-foreground/30' />
            </div>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className='w-full sm:w-36 h-10 bg-background/40 border border-foreground/10 rounded-xl px-3 text-sm text-foreground outline-none focus:border-primary/50'>
              <option value='All'>All</option>
              <option value='Active'>Active</option>
              <option value='InActive'>Inactive</option>
            </select>
          </div>
          <div className='hidden md:block overflow-x-auto'>
            <table className='w-full min-w-225'>
              <thead>
                <tr className='bg-foreground/2.5% border-y border-foreground/10'>
                  <th className='text-left px-4 py-3 text-xs font-medium text-foreground/60'>Name</th>
                  <th className='text-left px-4 py-3 text-xs font-medium text-foreground/60'>Email</th>
                  <th className='text-left px-4 py-3 text-xs font-medium text-foreground/60'>Company</th>
                  <th className='text-right px-4 py-3 text-xs font-medium text-foreground/60'>Total Orders</th>
                  <th className='text-left px-4 py-3 text-xs font-medium text-foreground/60'>Status</th>
                  <th className='w-14 px-4 py-3'></th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((customer) => (
                  <tr key={customer.id} className='border-b border-foreground/10 last:border-0 hover:bg-foreground/2.5% transition'>
                    <td className='px-4 py-3.5'>
                      <div className='flex items-center gap-3'>
                        <div className='w-9 h-9 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium'>
                          {customer.id}
                        </div>
                        <span className='text-sm font-medium text-foreground'>{customer.customer}</span>
                      </div>
                    </td>
                    <td className='px-4 py-3.5'>
                      <span className='text-sm text-foreground'>{customer.email}</span>
                    </td>
                    <td className='px-4 py-3.5'>
                      <span className='text-sm text-foreground'>{customer.company}</span>
                    </td>
                    <td className='px-4 py-3.5 text-right'>
                      <span className='text-sm font-medium text-foreground'>{customer.total}</span>
                    </td>
                    <td className='px-4 py-3.5'>
                      <span className={`inline-flex px-2.5 py-1 rounded-lg text-[11px] font-medium ${getStatusClass(customer.status)}`}>{customer.status}</span>
                    </td>
                    <td className='px-4 py-3.5'>
                      <button className='w-8 h-8 flex items-center justify-center rounded-lg text-foreground/50 hover:text-primary hover:bg-primary/10 transition'>
                        <FiEye size={17} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='md:hidden'>
            {filteredOrders.map((customer) => (
              <div
                key={customer.id}
                className='p-4 border-b border-foreground/10 last:border-0'
              >
                <div className='flex items-start justify-between gap-3'>

                  <div className='flex items-center gap-3 min-w-0'>

                    <div className='w-10 h-10 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium'>
                      {customer.id}
                    </div>

                    <div className='min-w-0'>
                      <p className='text-sm font-semibold text-foreground truncate'>
                        {customer.customer}
                      </p>

                      <p className='text-xs text-foreground/40 mt-1 truncate'>
                        {customer.email}
                      </p>

                      <p className='text-xs text-foreground/40 mt-1 truncate'>
                        {customer.company}
                      </p>
                    </div>

                  </div>

                  <button
                    onClick={() => setSelectedOrder(customer)}
                    className='shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-foreground/5 text-foreground/50 hover:text-primary hover:bg-primary/10 transition'
                  >
                    <FiEye size={17} />
                  </button>

                </div>

                <div className='mt-4 flex items-center justify-between gap-3'>

                  <span
                    className={`inline-flex px-2.5 py-1 rounded-lg text-[11px] font-medium ${getStatusClass(
                      customer.status
                    )}`}
                  >
                    {customer.status}
                  </span>

                  <div className='text-right'>
                    <p className='text-sm font-semibold text-foreground'>
                      ${Number(customer.total).toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>

                    <p className='text-xs text-foreground/40 mt-1'>
                      {customer.totalOrders} orders
                    </p>
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
                  <h2 className='text-lg font-semibold text-foreground'>New Customer</h2>
                  <p className='text-xs text-foreground/40 mt-1'>Create a new customer</p>
                </div>
                <button onClick={() => setShowNewOrder(false)} className='w-9 h-9 rounded-lg flex items-center justify-center text-foreground/50 hover:bg-foreground/5 hover:text-foreground transition'>
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
                  <button type='button' onClick={() => setShowNewOrder(false)} className='w-full sm:w-auto px-4 py-2.5 rounded-xl text-sm text-foreground/60 hover:bg-foreground/5 transition'>
                    Cancel
                  </button>
                  <button type='submit' className='w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition'>
                    Create Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {selectedOrder && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm'
            onMouseDown={(e) => {
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
                <button onClick={() => setSelectedOrder(null)} className='w-9 h-9 rounded-lg flex items-center justify-center text-foreground/50 hover:bg-foreground/5 hover:text-foreground transition'>
                  <FiX size={19} />
                </button>
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
                      <p className='text-sm font-semibold text-foreground'>
                        ${Number(customer.total).toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
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
                    <p className='text-sm leading-6 text-foreground/60'>{selectedOrder.note}</p>
                  </div>
                </div>
              </div>
              <div className='p-4 sm:p-5 border-t border-foreground/10 flex justify-end'>
                <button onClick={() => setSelectedOrder(null)} className='w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition'>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div></div>
  )
}
