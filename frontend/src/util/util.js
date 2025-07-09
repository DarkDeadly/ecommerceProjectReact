import honda from "../assets/honda.png"
import mazda from "../assets/mazda.png"
import toyota from "../assets/toyota.png"


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

export const EmailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || email.trim() === '') {
        return "Email is required.";
    }
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address.";
    }
    return null; 
};

export const PasswordValidation = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password || password.trim() === '') {
        return "Password is required.";
    }
    if (!passwordRegex.test(password)) {
        return "Password must be at least 8 characters, contain an uppercase letter, a lowercase letter, and a number.";
    }
    return null; 
};

export const PasswordMatch = (password, confirmPass) => {
    if (!confirmPass || confirmPass.trim() === '') {
        return "Confirm Password is required.";
    }
    if (password !== confirmPass) {
        return "Passwords do not match.";
    }
    return null; 
};
export const UsernameValidation = (username = "Anonymos")=>{
    return username 
}