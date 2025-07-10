import { Button, Input } from '@mui/joy'
import React, { useState } from 'react'
import "./signup.css"
import axios from 'axios'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { ValidationSchema } from '../../util/util'
import { LoaderCircle } from 'lucide-react';
import toast from "react-hot-toast"
const SignUpForm = () => {
    const [Loading, setLoading] = useState(false)
    const {register , handleSubmit , formState : {errors}} = useForm({
        resolver : yupResolver(ValidationSchema)
    })
    const onSubmit = async (data) => {
        const { username, email, password } = data;
        try {
            setLoading(true)
            axios.defaults.withCredentials = true
            const response = await axios.post("http://localhost:3005/auth/register" , {
                username,
                email,
                password
            })
        toast.success('User Submitted successfuly')
        console.log(response.data)
        setLoading(false)
        } catch (error) {
            console.log(error)
            toast.error("error please check your data")
        }
      
    }

  return (
    <article className='flex flex-col justify-between h-full'>
    <div className='flex flex-col gap-5'>
        <div className='text-center'>
       <h1 className='text-2xl font-bold pb-5 tracking-wide'>Join PrimeDrive Today</h1>
        <p className='text-base'>Create your account to access premium vehicles, personalized offers, and a seamless driving experience — whether buying or renting.</p>  
      </div> 
      <form  className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('username')} placeholder='Insert your username' sx={{paddingY : "10px" , marginY : "1rem"}} name='username'/>
        <Input {...register('email')} placeholder='Insert your Email' type='email' sx={{paddingY : "10px" , marginY : "1rem"}} name='email'/>
        {errors.email && <p className='text-base font-bold text-red-500'>{errors.email.message}</p>}
        <Input {...register('password')} placeholder='Insert your Password' type='password' sx={{paddingY : "10px" , marginY : "1rem"}} name='password'/>
        {errors.password && <p className='text-base font-bold text-red-500'>{errors.password.message}</p>}
        <Input {...register('confirmPassword')} placeholder='Confirm your Password' type='password' sx={{paddingY : "10px" , marginY : "1rem"}} name='confirmPassword'/>
        {errors.confirmPassword && <p className='text-base font-bold text-red-500'>{errors.confirmPassword.message}</p>}
        <Button disabled = {Loading} type='submit' sx={{paddingY : "10px" , marginTop : "1rem"}}>{Loading && <LoaderCircle className='animate-spin'/>} Register</Button>
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