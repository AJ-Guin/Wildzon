import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import CartContents from '../Cart/CartContents'
import { useNavigate } from 'react-router-dom'

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {

    const navigate = useNavigate()
    const handleCheckout = ()=>{
        toggleCartDrawer()
        navigate("/checkout")
    }

    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[25rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>

            {/* close button */}

            <div className='flex justify-end p-4'>
                <button onClick={toggleCartDrawer}>
                    <IoMdClose className='h-6 w-6 text-gray-600'/> 
                </button>
            </div>
            {/* cart content for with scroll area */}

            <div className='flex-grow p-4 pt-0 overflow-y-auto'>
                <h2 className='text-xl font-semibold mb-2'>Your Cart</h2>
                {/* component for cart */}
                <CartContents />
            </div>
            {/* checkout button at bottom */}
            <div className='p-4 bg-white sticky bottom-0'>
                <button 
                onClick={handleCheckout} 
                className={`w-full bg-brand-colo text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 hover:bg-[#5b116b] ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>Checkout</button>
                <p className='text-xs tracking-tighter text-gray-600 mt-2 text-center'>Shipping, taxes, and discount codes calculated at checkout.</p>
            </div>
        </div>
    )
}

export default CartDrawer
