import React from 'react'
import deal from "../assets/deal.jpg"
import deal2 from "../assets/dea2.jpg"
import "./about.css"
const About = () => {
  return (
    <section className='flex w-[95%] justify-between gap-4' data-aos="fade-up" data-aos-duration="3000" >
        <figure className='flex-1'  data-aos="fade-up"
         data-aos-duration="3000">
            <img src={deal} alt="Deal of the day" className='w-full h-[50vh] object-cover rounded-4xl border-2 border-white' />
            
        </figure>
        <div  data-aos="fade-up" data-aos-duration="3000" className='flex-1 border-white border-2 rounded-4xl flex flex-col justify-center bg-[var(--third-color)]'>
            <h2 className='text-3xl font-bold text-center'>About <span className='text-red-600'>Us</span></h2>
            <p className='text-base  text-center'>we offer a premium selection of cars for both purchase and rental, tailored to fit your lifestyle. With trusted service and unbeatable deals, we make every drive a step closer to your dream.</p>
        </div>
        <figure className='flex-1'  data-aos="fade-up" data-aos-duration="3000">
            <img src={deal2} alt="About Us" className='w-full h-[50vh] object-cover rounded-4xl border-2 border-white' />
           
        </figure>
    </section>
  )
}

export default About