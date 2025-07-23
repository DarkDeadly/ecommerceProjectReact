const imagekit = require("../config/imagekit");
const CarModel = require("../models/carModel");
const fs = require("fs").promises;


const addingCar = async (req, res) => {
  try {
    const { name, brand, price, year, description, quantity } = req.body;
    const userId = req.user.id;

    if (!name || !brand || !price || !year || !description || !quantity) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required." });
    }

    const image = req.file;
    const fileBuffer = await fs.readFile(image.path);

    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: image.originalname,
      folder: "/carsImages",
    });

    await fs.unlink(image.path); // cleanup temp file

    const optimisedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "1250" },
        { quality: "auto" },
        { format: "webp" },
      ],
    });

    const newCar = new CarModel({
      name,
      brand,
      price,
      year,
      imageUrl: optimisedImageUrl,
      description,
      quantity,
      addedBy: userId,
    });

    await newCar.save();

    res.status(201).json({
      message: "Car added successfully.",
      car: newCar,
    });
  } catch (error) {
    console.error("Error adding car:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const GetCars = async (req, res) => {
  try {
    const cars = await CarModel.find().populate("addedBy", "username email ");
    res.status(200).json({
      message: "Cars fetched successfully.",
      cars: cars,
    });
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const GetCarById = async (req, res) => {
  const carId = req.params.id;
  try {
    const fetchCar = await CarModel.findById(carId);
    if (fetchCar) {
      res.status(200).json({
        message: "Car fetched successfully.",
        car: fetchCar,
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "error",
      error: error.message,
    });
  }
};

const editCar = async (req, res) => {
  const carID = req.params.id;
  const updateFields = req.body;

  try {
    const updatedCar = await CarModel.findByIdAndUpdate(
      carID,
      { $set: updateFields },
      { new: true }
    );

    if (!updatedCar) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json({
      message: "Car updated successfully",
      updatedCar,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating car",
      error: error.message,
    });
  }
};

const deleteCar = async (req, res) => {
  const carID = req.params.id;
  try {
    const DeleteData = await CarModel.findByIdAndDelete(carID);
    if (DeleteData) {
      res.status(200).json({
        message: "Car deleted successfully.",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "error",
      error: error.message,
    });
  }
};

const GetPopularCars = async (req, res) => {
  try {
    const PopCars = await CarModel.find({ Popular: true }).limit(6);

    res.status(200).json({
      success: true,
      message: "Popular Cars fetched successfully",
      cars: PopCars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch popular cars",
      error: error.message,
    });
  }
};

module.exports = {
  addingCar,
  GetCars,
  GetCarById,
  editCar,
  deleteCar,
  GetPopularCars,
};
