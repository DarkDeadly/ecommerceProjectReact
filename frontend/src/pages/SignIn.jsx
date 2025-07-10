import React from 'react'
import '../components/Authorization/signup.css'
import SignInForm from '../components/Authorization/SignInForm'
import { useNavigate } from 'react-router'

function SignIn() {
    const navigate = useNavigate()
  return (
       <section className='signup min-h-screen bg-gradient-to-r from-gray-400 to-white via-gray-300 flex w-full flex-row-reverse '>
        <div className='w-[55%] image min-h-screen '></div>
        <div className='forms w-[45%] flex flex-col items-center '>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-black to-red-500 bg-clip-text text-transparent p-5 mb-7 cursor-pointer'onClick={() => navigate('/')}>PrimeDrive</h1>
            <div className='signupForms w-[95%] h-full'>
                <SignInForm/>
            </div>
        </div>
    </section>
  )
}

export default SignIn