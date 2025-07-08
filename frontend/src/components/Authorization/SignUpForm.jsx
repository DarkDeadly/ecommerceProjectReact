import { Button, Input } from '@mui/joy'
import React from 'react'
import "./signup.css"
const SignUpForm = () => {
  return (
    <article className='flex flex-col justify-between h-full'>
    <div className='flex flex-col gap-5'>
        <div className='text-center'>
       <h1 className='text-2xl font-bold pb-5 tracking-wide'>Join PrimeDrive Today</h1>
        <p className='text-base'>Create your account to access premium vehicles, personalized offers, and a seamless driving experience — whether buying or renting.</p>  
      </div> 
      <form action="" className='flex flex-col gap-4'>
        <Input placeholder='Insert your username' sx={{paddingY : "10px"}}/>
        <Input placeholder='Insert your Email' type='email' sx={{paddingY : "10px"}}/>
        <Input placeholder='Insert your Password' type='password' sx={{paddingY : "10px"}}/>
        <Input placeholder='Confirm your Password' type='password' sx={{paddingY : "10px"}}/>
        <Button sx={{paddingY : "10px"}}>Register</Button>
         <div className="flex items-center text-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-4 text-black text-base">or you can continue with</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <div className='flex justify-center gap-5'> 
            <Button sx={{paddingY : "10px"}}>Continue with Google</Button>
            <Button sx={{paddingY : "10px"}}>Continue with Facebook</Button>
        </div>
      </form>
    </div>
    <p className='text-base mb-2 text-center'>you have an account ? what you waiting for <span className=' cursor-pointer underline hover:text-purple-600'>Sign In</span> </p>

    </article>
  )
}

export default SignUpForm