const mongoose = require("mongoose");



const UserModel = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        default: "Anonymous",
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role : {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },

}, { timestamps: true });
const User = mongoose.model("User", UserModel);
module.exports = User;