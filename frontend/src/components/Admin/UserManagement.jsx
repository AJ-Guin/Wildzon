import React, { useState } from 'react'

const UserManagement = () => {
    const users=[
        {
            name:"Robin Do",
            email:"robin@test.com",
            role:"admin",
        },
    ]

    const [fromData, setFromData]=useState({
        name:"",
        email:"",
        password: "",
        role:"customer", //defaule role
    })
    const handleChange=(e)=>{
        setFromData({
            ...fromData,
            [e.target.name]:e.target.value
        })
    }


  return (
    <div className='max-w-7xl mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-4'>User Management</h2>
      {/* Add New User Form */}
      <div className='p-6 rounded-lg mb-6'>
        <h3 className='text-lg font-bold mb-4'>Add New User</h3>
        <form>
            <div className='mb-4'>
                <label className='block text-gray-700'>Name</label>
                <input type="text" name='name' 
                value={fromData.name} 
                onChange={handleChange}
                className='w-full p-2 border rounded' />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700'>Name</label>
                <input type="text" name='name' 
                value={fromData.name} 
                onChange={handleChange}
                className='w-full p-2 border rounded' />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700'>Name</label>
                <input type="text" name='name' 
                value={fromData.name} 
                onChange={handleChange}
                className='w-full p-2 border rounded' />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700'>Name</label>
                <input type="text" name='name' 
                value={fromData.name} 
                onChange={handleChange}
                className='w-full p-2 border rounded' />
            </div>
        </form>
      </div>
    </div>
  )
}

export default UserManagement
