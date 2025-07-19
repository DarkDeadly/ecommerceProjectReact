const express = require('express');
const { addToCart, getCartInfo, EditCartQuantity, CheckCarinCart } = require('../../controller/cartController');
const { authMiddleware } = require('../../middleware/authmiddle');

const router = express.Router();


router.post("/addcart" ,authMiddleware , addToCart)
router.get("/getcart" , authMiddleware ,getCartInfo)
router.put("/editcart" , authMiddleware , EditCartQuantity)
router.get("/CheckCar" , authMiddleware , CheckCarinCart )


module.exports = router;