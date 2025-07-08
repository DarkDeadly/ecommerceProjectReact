import React from 'react'

const CarCard = ({feature}) => {
  return (
    <div className='flex flex-col justify-between h-full bg-[var(--third-color)] text-black rounded-4xl p-5 border-4 border-white'>
        <figure className='w-full object-center '>
            <img src={feature.image} alt="image"  className="w-full h-full object-cover"/>
        </figure>
        <div  className='flex-1 flex flex-col items-start justify-end '>
            <h2 className='text-xl font-bold'>{feature.name}</h2>
            <div className='flex items-center justify-between w-full '>
            <p><span className='font-bold'>price :</span> {feature.price}</p>
            <p><span className='font-bold'>Engine : </span>{feature.Engine}</p>
            </div>
        </div>
    </div>
  )
}

export default CarCard