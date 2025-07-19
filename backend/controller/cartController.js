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
  const cart = await Cart.findOne({ user : req.user.id}).populate("items.car", "name brand price imageUrl quantity");
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

const CheckCarinCart = async (req, res) => {
 const carId = req.query.carId;
  try {
  const cart = await Cart.findOne({ user: req.user.id})
  if (!cart) {
    return res.status(404).json({ message: "Cart not found" , carInCart: false });
  }
  const carInCart = cart.items.some(item => item.car.toString() === carId);
  if (carInCart) {
    return res.status(200).json({ message: "Car is in the cart" , carInCart: true });
  }
  return res.status(200).json({ message: "Car is not in the cart" , carInCart: false });  
  } catch (error) {
    console.error("Error checking car in cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }

 
}

const EditCartQuantity = async (req , res) => {
  const { cartId, carId, quantity } = req.body;

  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const getCartByUser = await Cart.findOne({ user: req.user.id });
  
    //Find the user with the cart
    if (!getCartByUser) {
      return res.status(404).json({ message: "Cart not found" });
    }
    // Get The specific car from the cart
    const GetCarFromCart = getCartByUser.items.find(
      (item) => item.car.toString() === carId 
    )
    if (!GetCarFromCart) {
      return res.status(404).json({ message: "Car not found in cart" });
    }
    // update the quantity of the car in the cart 
   if (quantity <= 0) {
      // Remove item from cart
      getCartByUser.items = getCartByUser.items.filter(
        (item) => item.car.toString() !== carId
      );
    } else {
      // Update quantity
      GetCarFromCart.quantity = quantity;
    }
     await getCartByUser.save();
    return res.status(200).json({
      message: quantity <= 0 ? "Car removed from cart" : "Quantity updated successfully",
      cart: getCartByUser,
    });
  } catch (error) {
    console.error("Error updating cart quantity:", error);
    res.status(500).json({ message: "Internal server error", error: error.message }); 
  } 
}

module.exports = {
  addToCart , getCartInfo , EditCartQuantity ,CheckCarinCart
}