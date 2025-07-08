import React from 'react'
import '../components/Authorization/signup.css'
import authentication from "../assets/authenticationImage.jpg"
import SignUpForm from '../components/Authorization/SignUpForm'
const SignUp = () => {
  return ( 
    <section className='signup h-screen bg-gradient-to-r from-gray-400 to-white via-gray-300 flex w-full flex-row-reverse '>
        <div className='w-[55%]'>
            <figure className='w-full'>
                <img src={authentication} alt="authenticationImage" className="w-full h-screen object-cover rounded-tl-2xl rounded-bl-2xl "/>
            </figure>
        </div>
        <div className='forms w-[45%] flex flex-col items-center'>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-black to-red-500 bg-clip-text text-transparent p-5 mb-7'>PrimeDrive</h1>
            <div className='w-[95%] h-full'>
                <SignUpForm/>
            </div>
        </div>
    </section>
  )
}

export default SignUp