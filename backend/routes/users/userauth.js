const express = require("express");
const { registerValidation , loginValidation , handleValidationErrors } = require("../../middleware/emailpassValidation");
const {RegisterUser, LoginUser, logout, getUser } = require("../../controller/authController");
const { authMiddleware } = require("../../middleware/authmiddle");


const router = express.Router();


router.post("/register",registerValidation , handleValidationErrors ,RegisterUser)
router.post("/login" , loginValidation ,  handleValidationErrors , LoginUser)
router.post("/logout" , logout)
router.get("/getUser" , authMiddleware ,getUser)
module.exports = router;