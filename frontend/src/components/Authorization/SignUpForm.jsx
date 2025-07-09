import { Button, Input } from '@mui/joy'
import React, { useActionState } from 'react'
import "./signup.css"
import { EmailValidation, PasswordMatch, PasswordValidation, UsernameValidation } from '../../util/util'
const SignUpForm = () => {
 const handleSubmit = async (prevData, formData) => {
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Perform validation using utility functions
    const errors = {
        username: UsernameValidation(username),
        email: EmailValidation(email),
        password: PasswordValidation(password),
        confirmPassword: PasswordMatch(password, confirmPassword),
        form: null 
    };

    const hasErrors = Object.values(errors).some(error => error !== null);

    if (hasErrors) {
        return { success: false, errors };
    } else {
        const data = {
            username,
            email,
            password
        };
        console.log("Form submitted successfully", data);
        return { success: true, message: "Registration successful!", data, errors: {} };
    }
};


    const [data , action , isPending] = useActionState(handleSubmit , { success: null, errors: {} })


    console.log("data", data)
  return (
    <article className='flex flex-col justify-between h-full'>
    <div className='flex flex-col gap-5'>
        <div className='text-center'>
       <h1 className='text-2xl font-bold pb-5 tracking-wide'>Join PrimeDrive Today</h1>
        <p className='text-base'>Create your account to access premium vehicles, personalized offers, and a seamless driving experience — whether buying or renting.</p>  
      </div> 
      <form action={action}  className='flex flex-col'>
        <Input placeholder='Insert your username' sx={{paddingY : "10px" , marginY : "1rem"}} name='username'/>
        <Input placeholder='Insert your Email' type='email' sx={{paddingY : "10px" , marginY : "1rem"}} name='email'/>
        <p className='text-base text-red-500 font-bold'>{data.errors.email}</p>
        <Input placeholder='Insert your Password' type='password' sx={{paddingY : "10px" , marginY : "1rem"}} name='password'/>
        <p className='text-base text-red-500 font-bold'>{data.errors.password}</p>
        <Input placeholder='Confirm your Password' type='password' sx={{paddingY : "10px" , marginY : "1rem"}} name='confirmPassword'/>
        <p className='text-base text-red-500 mb-4 font-bold'>{data.errors.confirmPassword}</p>
        <Button type='submit' sx={{paddingY : "10px"}}>Register</Button>
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