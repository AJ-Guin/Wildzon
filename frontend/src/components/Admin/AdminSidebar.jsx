import React, { useState } from 'react'
import { FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const AdminSidebar = () => {
    const navigate=useNavigate()
    const handleLogout=()=>{
        navigate("/")
    }
  return (
    <div className='p-6'>
        <div className='mb-6'>
            <Link to="/admin" className='text-2xl font-medium'>Wildzon</Link>
        </div>
        <h2 className='text-xl font-medium mb-6 text-center hidden sm:block'>Admin Dashboard</h2>
        <nav className='felx flex-col space-y-2'>
            <NavLink to="/admin/users" className={({isActive})=> isActive ? "bg-indigo-950 text-white py-3 px-4 rounded flex items-center space-x-2": "text-indigo-100 hover:bg-indigo-950 hover:text-white py-3 px-4 rounded flex items-center space-x-2 transition-all duration-300 ease-out"}>
                <FaUser/>
                <span>Users</span>
            </NavLink>
        </nav>
        <nav className='felx flex-col space-y-2'>
            <NavLink to="/admin/products" className={({isActive})=> isActive ? "bg-indigo-950 text-white py-3 px-4 rounded flex items-center space-x-2": "text-indigo-100 hover:bg-indigo-950 hover:text-white py-3 px-4 rounded flex items-center space-x-2 transition-all duration-300 ease-out"}>
                <FaBoxOpen/>
                <span>Products</span>
            </NavLink>
        </nav>
        <nav className='felx flex-col space-y-2'>
            <NavLink to="/admin/orders" className={({isActive})=> isActive ? "bg-indigo-950 text-white py-3 px-4 rounded flex items-center space-x-2": "text-indigo-100 hover:bg-indigo-950 hover:text-white py-3 px-4 rounded flex items-center space-x-2 transition-all duration-300 ease-out"}>
                <FaClipboardList/>
                <span>Orders</span>
            </NavLink>
        </nav>
        <nav className='felx flex-col space-y-2'>
            <NavLink to="/" className={({isActive}) => isActive ? "bg-indigo-950 text-white py-3 px-4 rounded flex items-center space-x-2": "text-indigo-100 hover:bg-indigo-950 hover:text-white py-3 px-4 rounded flex items-center space-x-2 transition-all duration-300 ease-out"}>
                <FaStore/>
                <span>Shop</span>
            </NavLink>
        </nav>
        <div className='mt-6'>
            <button onClick={handleLogout} className='w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300 ease-out'>
                <FaSignOutAlt/>
                <span>Logout</span>
            </button>
        </div>
    </div>
  )
}

export default AdminSidebar
