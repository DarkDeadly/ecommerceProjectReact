const mongoose = require("mongoose");

const FavouriteModel = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User" 
    },
    items : [{
        car : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Car"
        }
    }]

})

module.exports = mongoose.model("Favourite", FavouriteModel);