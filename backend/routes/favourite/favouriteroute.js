const express = require("express");
const { AddToFavourites , GetFavourites } = require("../../controller/favouriteController");
const { authMiddleware } = require("../../middleware/authmiddle");

const router = express.Router();


router.post("/add" ,authMiddleware, AddToFavourites);
router.get("/getFavourites" , authMiddleware , GetFavourites)




module.exports = router;