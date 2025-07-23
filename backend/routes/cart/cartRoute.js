const express = require('express');
const { addToCart, getCartInfo, EditCartQuantity, CheckCarinCart, DeleteCarFromCart } = require('../../controller/cartController');
const { authMiddleware } = require('../../middleware/authmiddle');
const upload = require('../../middleware/Storage');

const router = express.Router();


router.post("/addcart" , authMiddleware , addToCart)
router.get("/getcart" , authMiddleware ,getCartInfo)
router.put("/editcart" , authMiddleware , EditCartQuantity)
router.get("/CheckCar" , authMiddleware , CheckCarinCart )
router.delete("/delete/:id" , authMiddleware , DeleteCarFromCart)


module.exports = router;