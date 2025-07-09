import React from 'react'
import '../components/Authorization/signup.css'
import SignUpForm from '../components/Authorization/SignUpForm'
const SignUp = () => {
  return ( 
    <section className='signup min-h-screen bg-gradient-to-r from-gray-400 to-white via-gray-300 flex w-full flex-row-reverse '>
        <div className='w-[55%] image min-h-screen '></div>
        <div className='forms w-[45%] flex flex-col items-center '>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-black to-red-500 bg-clip-text text-transparent p-5 mb-7'>PrimeDrive</h1>
            <div className='w-[95%] h-full'>
                <SignUpForm/>
            </div>
        </div>
    </section>
  )
}

export default SignUp