import React from 'react'
import "./aoucement.css"
const Anoucement = () => {
  return (
    <section className='flex gap-1 w-[99.8%] '>
        <div className='  p-5 bg-white'>
            <h1 className='font-[var(--header-font)] text-3xl '>Discover Unmissable <span className='text-[#FFD700] font-bold'>Monthly Deals on Premium Cars!</span></h1>
        </div>
        <div className=' bg-white  p-5'>
            <p className='text-justify text-lg font-[var(--title-font)] text-gray-400 '>Every month, we bring you unbeatable discounts on premium vehicles to help you drive in style for less.
            Whether you're looking to buy or lease, our special offers are designed to fit your budget without compromising quality.</p>
        </div>
    </section>
  )
}

export default Anoucement