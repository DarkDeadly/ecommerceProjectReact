const express = require("express");
const { addingCar, GetCars, GetCarById, editCar , deleteCar, GetPopularCars, GetPromoCars } = require("../../controller/carController");
const {authMiddleware , AdminCheck} = require("../../middleware/authmiddle");
const upload = require("../../middleware/Storage");
const router = express.Router()

router.post("/addCar" ,authMiddleware , upload.single("imageUrl") ,addingCar)
router.get('/getCars', authMiddleware , GetCars); 
router.get('/getCars/:id' , authMiddleware , GetCarById);
router.put("/editCar/:id" , authMiddleware , AdminCheck , editCar )
router.delete("/deleteCar/:id" , authMiddleware , AdminCheck , deleteCar )
router.get("/popular" , GetPopularCars)
router.get("/promo" ,authMiddleware, GetPromoCars)


module.exports = router;