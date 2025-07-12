const express = require("express");
const { addingCar, GetCars, GetCarById, editCar , deleteCar, GetPopularCars } = require("../../controller/carController");
const {authMiddleware , AdminCheck} = require("../../middleware/authmiddle");
const router = express.Router()

router.post("/addCar" ,authMiddleware , AdminCheck ,addingCar)
router.get('/getCars', authMiddleware , GetCars); 
router.get('/getCars/:id' , authMiddleware , GetCarById);
router.put("/editCar/:id" , authMiddleware , AdminCheck , editCar )
router.delete("/deleteCar/:id" , authMiddleware , AdminCheck , deleteCar )
router.get("/popular" , GetPopularCars)



module.exports = router;