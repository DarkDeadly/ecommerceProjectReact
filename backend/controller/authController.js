const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const RegisterUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //verify if the email is already registered
    const normalizedEmail = email.toLowerCase().trim();
    const existingEmail = await User.findOne({ email: normalizedEmail });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already in use" });
    }
    // verify if the username is already registered
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }
    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // creating a new user
    const newUser = new User({
      username: username || "Anonymous",
      email: normalizedEmail,
      password: hashedPassword,
    });

    await newUser.save();
    const token = signJWT({
      email: newUser.email,
      id: newUser._id,
      role: newUser.role,
    });
    // Store the token in the cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid  password" });
    }
    const token = signJWT({ email: user.email, id: user._id, role: user.role });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      message: "login successfuly",
      token,
      user: {
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const logout = async(req , res ) => {
    try {
      res.clearCookie('token' , {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
       }) 
       return res.status(200).json({success : true , message : "logged out"})
    } catch (error) {
      res.status(401).json({success : false , message : error.message})  
    }
}

const getUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      user: {
        username: user.username,
        email: user.email,
        role: user.role,
        id: user._id,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const signJWT = (user) => {
  return jwt.sign(user, process.env.JWTSECRET, {
    expiresIn: "30d",
  });
};

module.exports = { RegisterUser, LoginUser ,logout , getUser };
