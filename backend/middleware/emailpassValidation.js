const { body, validationResult } = require("express-validator");

//steps to follow step1 : validate the email and password ; step 2 : create the middleware for the error



// step 1 : Validation rules for user registration
const registerValidation = [

    body("email")
        .trim()
        .notEmpty().withMessage("Email is required.") 
        .isEmail().withMessage("Please enter a valid email address."),
    body("password")
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long")
        .matches(/\d/).withMessage("Password must contain at least one number")
        .matches(/[A-Z]/).withMessage("Password must contain at least one uppercase letter")
];


const loginValidation = [
   body("email")
        .trim()
        .notEmpty().withMessage("Email is required.") 
        .isEmail().withMessage("Please enter a valid email address."),
    body("password")
        .notEmpty().withMessage("Password is required.")
       
]


// step 2 : Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false, 
            message: 'Validation errors',
            errors: errors.array() 
        });
    }
   
    next();
};

module.exports = {
    registerValidation,
    handleValidationErrors,
    loginValidation
};