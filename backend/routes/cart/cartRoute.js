const express = require('express');
const { addToCart, getCartInfo, EditCartQuantity } = require('../../controller/cartController');
const { authMiddleware } = require('../../middleware/authmiddle');

const router = express.Router();


router.post("/addcart" ,authMiddleware , addToCart)
router.get("/getcart" , authMiddleware ,getCartInfo)
router.put("/editcart" , authMiddleware , EditCartQuantity)



module.exports = router;