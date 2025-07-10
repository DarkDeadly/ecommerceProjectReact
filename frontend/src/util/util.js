import honda from "../assets/honda.png"
import mazda from "../assets/mazda.png"
import toyota from "../assets/toyota.png"
import * as Yup from 'yup';


export const CarFeatures = [
    {
        name : "Toyota Fortuner TRD",
        price : "274,800 DT",
        Engine: 'D-4D' ,
        image : toyota


    },
    {
        name : "Honda CR-V",
        price : "289,900 DT",
        Engine: 'i-VTEC',
        image : honda
    },
    {
        name : "Mazda CX-5",
        price : "299,900 DT",
        Engine: 'Skyactiv-G ',
        image : mazda
    }
]

export const ValidationSchema = Yup.object().shape({
    username:Yup.string()
    .default("Anonymous")
    ,
    email:Yup.string()
    .email("Invalid Email")
    .required('Email is Required'),
    password:Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Must contain an uppercase letter')
    .matches(/[a-z]/, 'Must contain a lowercase letter')
    .matches(/\d/, 'Must contain a number')
    .required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')] , "Password must Match")
    .required('Please confirm your password'),

})


