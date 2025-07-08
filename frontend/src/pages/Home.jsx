import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Aos from 'aos'
import 'aos/dist/aos.css'
import About from '../components/About'
import RentalDeals from '../components/RentalDeals'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

const Home = () => {
   useEffect(() => {
 Aos.init({});
}, [])
    
  return (
    <div  className="bg-[var(--secondary-color)] min-h-screen">
        <div className='flex justify-center'> 
             <Header/>
        </div>
        <div className='flex justify-center'>
            <Hero/>
        </div>
        <div className='flex justify-center'>
            <About/>
        </div>
        <div className='flex justify-center'>
            <RentalDeals/>
        </div>
        <div className='flex justify-center'>
            <Cta/>
        </div>
        <div className='flex justify-center'>
            <Footer/>
        </div>
    </div>
  )
}

export default Home