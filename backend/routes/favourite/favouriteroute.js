const express = require("express");
const { AddToFavourites , GetFavourites, DeleteFavourite } = require("../../controller/favouriteController");
const { authMiddleware } = require("../../middleware/authmiddle");

const router = express.Router();


router.post("/add" ,authMiddleware, AddToFavourites);
router.get("/getFavourites" , authMiddleware , GetFavourites)
router.delete("/delete/:id" , authMiddleware, DeleteFavourite);  



module.exports = router;