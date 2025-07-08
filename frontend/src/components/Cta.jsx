import { Button } from '@mui/joy'
import React from 'react'
import './cta.css'
const Cta = () => {
  return (
    <section className=' w-[95%]  flex  items-center justify-center bg-[var(--third-color)] rounded-4xl p-5 border-2 border-white' data-aos="fade-left" data-aos-duration="3000">
        <div className='w-[85%] flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-2xl font-bold text-center '><span className='text-yellow-600'>Drive</span> the Future — <span className='text-yellow-600'>Own</span> or <span className='text-yellow-600'>Rent</span> Your Ideal Car Today</h1>
        <p className='text-base text-center'>Experience the freedom of choice with our exclusive car deals. Whether you're looking to buy your dream car or rent a vehicle for your next adventure, we have the perfect options for you. Explore our premium selection and drive away with unbeatable offers.</p>
        <Button sx={{ padding : "0.5rem 3rem", fontFamily : "cursive"}}>Start Now</Button>
        </div>
    </section>
  )
}

export default Cta