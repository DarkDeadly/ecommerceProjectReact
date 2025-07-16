const mongoose = require("mongoose");

const CartModel = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            car: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Car",
                required: true
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
}, { timestamps: true });

const Cart = mongoose.model("Cart", CartModel);
module.exports = Cart;
