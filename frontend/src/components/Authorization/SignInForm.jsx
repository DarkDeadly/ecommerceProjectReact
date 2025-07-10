import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import "../Authorization/signup.css"
import { Button, Input } from '@mui/joy'
import { LoaderCircle } from 'lucide-react'
import axios from 'axios'
import toast from 'react-hot-toast'
const SignInForm = () => {
     const [Loading, setLoading] = useState(false)
     const [ErrorForm, setErrorForm] = useState("")
    const {register , handleSubmit } = useForm()
    const Navigate = useNavigate()
    const onSubmit = async(data) => {
        const {email , password} = data
        axios.defaults.withCredentials = true
        setLoading(true)
        try {
            const response = await axios.post(import.meta.env.VITE_BACKENDURLAUTH+'/login' , {
                email ,
                password
            })
            console.log("data is : " , response.data)
            toast.success("User Logged In Succesfuly")
            setLoading(false)    
        } catch (error) {
            toast.error(error.response.data.message)
            setLoading(false) 
           
                        

        }
    }

  return (
    <article className='flex flex-col justify-between h-full'>
    <div className='flex flex-col gap-5'>
        <div className='text-center publicity'>
       <h1 className='text-2xl font-bold pb-5 tracking-wide'>Sign In to Your PrimeDrive Account</h1>
        <p className='text-base'>Log in to access exclusive offers, manage your bookings, and enjoy a premium automotive experience.</p>  
      </div> 
      <form  className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('email')} placeholder='Insert your Email' type='email' sx={{paddingY : "10px" , marginY : "1rem"}} name='email'/>
        <Input {...register('password')} placeholder='Insert your Password' type='password' sx={{paddingY : "10px" , marginY : "1rem"}} name='password'/>
        <span className='underline cursor-pointer max-[902px]:text-white'>Forgot Password </span>
        <Button disabled = {Loading} type='submit' sx={{paddingY : "10px" , marginTop : "1rem"}}>{Loading && <LoaderCircle className='animate-spin'/>} Register</Button>
         <div className="flex items-center text-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-4 text-black text-base">or you can continue with</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <div className='flex justify-center gap-5 my-2'> 
            <Button sx={{paddingY : "10px"}}>Continue with Google</Button>
            <Button sx={{paddingY : "10px"}}>Continue with Facebook</Button>
        </div>
      </form>
    </div>
    <p className='text-base mb-2 text-center max-[902px]:text-white'>you Dont have an account ? what you waiting for <span className=' cursor-pointer underline hover:text-purple-600'onClick={()=> Navigate("/SignUp")}>Sign Up</span> </p>

    </article>
  )
}

export default SignInForm