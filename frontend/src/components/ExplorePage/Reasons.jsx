import React from 'react'
import { features } from '../../util/util'
import FeatureImage from "../../assets/imagess.png"
const Reasons = () => {
  return (
    <div className='flex gap-5 my-5 w-full h-full '>
            <div className='w-[40%] bg-gradient-to-r from-gray-700 to-white flex items-center  ' 
            >
              <img src={FeatureImage} alt="" className='bg-center bg-cover rounded-2xl ' data-aos="fade-down" data-aos-duration="3000"/>
            </div>  
            <div className='w-[60%]' data-aos="fade-up" data-aos-duration="3000">
                <h1 className='font-[var(--title-font)] text-2xl '>DRIVE INTO EXCELLENCE WITH PRIME FEATURES</h1>
                <p className='font-[var(--text-font)] text-lg text-gray-500'>Discover what sets us apart. At PrimeDrive, we combine innovation, affordability, and unmatched service to deliver an elevated driving experience.</p>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-2 mt-2'>
                    {features.map((feature , index) => (
                        <article key={index} className=' border-2 border-gray-500 p-5 rounded-2xl'>
                        <h2 className='font-[var(--title-font)] text-2xl'><span >{feature.id}.</span>  {feature.title}</h2>
                        <p className='font-[var(--text-font)] text-lg text-gray-500'>{feature.text}</p>
                    </article>
                    ))}
                </div>
            </div>     
    </div>
  )
}

export default Reasons