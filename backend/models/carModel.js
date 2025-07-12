const mongoose = require("mongoose");


const CarModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    
     Popular : {
        type : Boolean,
        default : false
     },
    
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });   

const Car = mongoose.model("Car", CarModel);
module.exports = Car;