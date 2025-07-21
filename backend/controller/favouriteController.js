const favouriteModel = require("../models/favouriteModel");

const AddToFavourites = async(req , res) => {
    const {carId } = req.body
    const Authenticated = req.user.id 
    if (!Authenticated) {
        return res.status(401).json({ message: "Unauthorized" });
        
    }
    try {
        const Favourite = await favouriteModel.findOne({ user: Authenticated });
        if (!Favourite) {
            const newFavourite = new favouriteModel({
                user: Authenticated,
                items: [{ car: carId }],
            });
            await newFavourite.save();
            return res.status(201).json({ message: "Car added to favourites" });
        } else {
            const existingItem = Favourite.items.find(item => item.car.toString() === carId);
            if (existingItem) {
                return res.status(400).json({ message: "Car already in favourites" });
            } else {
                Favourite.items.push({ car: carId });
                await Favourite.save();
                return res.status(200).json({ message: "Car added to favourites" });
            }
        }
    } catch (error) {
        console.error("Error adding to favourites:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const GetFavourites = async(req , res) => {
    const Authenticated = req.user.id
    if (!Authenticated) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const Favourite = await favouriteModel.findOne({ user: Authenticated }).populate("items.car", "name brand price imageUrl");
        if (!Favourite) {
            return res.status(201).json({ message: "No favourites found" });
        }
        return res.status(200).json(Favourite.items);
    } catch (error) {
        console.error("Error fetching favourites:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}



module.exports = {
    AddToFavourites , GetFavourites}