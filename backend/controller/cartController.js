const Car = require("../models/carModel");
const Cart = require("../models/cartModel")


const addToCart = async (req, res) => {
  const { carId, quantity } = req.body;

  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try { 
     let cart = await Cart.findOne({ user: req.user.id });

     if (cart) {
      // If cart exists, check if the car is already in the cart
      const existingItem = cart.items.find(
        (item) => item.car.toString() === carId);
      if (existingItem) {
        return res.status(400).json({ message: "Car already in cart" });
      }
      cart.items.push({ car: carId, quantity });
      await cart.save();
      return res.status(200).json({ message: "Car added to cart", cart });
     }else {
      // If cart does not exist, create a new cart
      cart = new Cart({
        user: req.user.id,
        items: [{ car: carId, quantity }]
      });
      await cart.save();
      return res.status(201).json({ message: "Cart created and car added", cart });
     }
    
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const getCartInfo = async(req , res) => {
  const cart = await Cart.findOne({ user : req.user.id}).populate("items.car", "name brand price imageUrl");
  try {
    return res.status(200).json({
      message: "Cart fetched successfully.",
      Cart: cart
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Internal server error" });
    
  }
}

module.exports = {
  addToCart , getCartInfo
}