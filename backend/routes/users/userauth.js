const express = require("express");
const { registerValidation , loginValidation , handleValidationErrors } = require("../../middleware/emailpassValidation");
const {RegisterUser, LoginUser } = require("../../controller/authController");


const router = express.Router();


router.post("/register",registerValidation , handleValidationErrors ,RegisterUser)
router.post("/login" , loginValidation ,  handleValidationErrors , LoginUser)


module.exports = router;