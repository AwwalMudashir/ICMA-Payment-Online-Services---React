import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <img src="/StateLogo.png" alt="logo" className='w-40 h-12' />
      <h1 className='text-2xl font-bold text-gray-800 mt-[6px]'>Revenue Payments Made Easy</h1>
      <button className='bg-[#198754] text-white px-4 py-[3px] h-10 mt-1 font-semibold rounded-md hover:opacity-75'>Self-Service</button>
    </div>
  )
}

export default Navbar
