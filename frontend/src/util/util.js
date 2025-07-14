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

export const SoldCars = [
    {
        name : "Chevrolet Camaro",
        sold : "50%",
        oldprice : "104,000 DT",
        newprice :  "52,000 DT",
        image : "https://upload.wikimedia.org/wikipedia/commons/2/2f/2019_Chevrolet_Camaro_base%2C_front_11.9.19.jpg"

    },
    {
        name : "Ford Mustang",
        sold : "40%",
        oldprice : "90,000 DT",
        newprice : "54,000 DT",
        image : "https://www.evanshalshaw.com/-/media/evanshalshaw/blog/car-legends-the-legacy-of-the-ford-mustang/2021-update/ford-mustang-bullitt-1280x720px.ashx?mh=1440&la=en&h=720&w=1280&mw=2560&hash=B346F34C67677987BC5D91EBE52B65FC"
    },
    {
        name : "Toyota GT86",
        sold : "30%",
        oldprice : "80,000 DT",
        newprice : "56,000 DT",
        image : "https://smartcdn.gprod.postmedia.digital/driving/wp-content/uploads/2021/04/21-04-16-eAlder-2021-Toyota-86-2.jpg"

    }

]

export const features = [
    {
        id : "1" ,
        title : "Affordable Plans for All",
        text : "From students to executives, we offer flexible pricing options tailored to every lifestyle."
    },
    {
        id : "2" ,
        title : "Unbeatable Price Assurance",
        text : "We guarantee the best market deals — no hidden fees, no surprises, just value."
    },
     {
        id : "3" ,
        title : "Go Green, Drive Clean",
        text : "Experience the future with our expanding fleet of fully electric and hybrid vehicles."
    },
     {
        id : "4" ,
        title : " Experts at Your Service",
        text : "Our passionate team ensures a smooth, stress-free journey — every mile of the way."
    }
]

export const FilterItems = ["Chevrolet" , "Audi" , "Toyota" , "Ford"]


