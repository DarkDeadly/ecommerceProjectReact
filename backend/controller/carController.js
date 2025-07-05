const CarModel = require("../models/carModel")


const addingCar = async ( req , res) => {
   try {
    const   { name , brand , price , year , imageUrl } = req.body;
    const userId = req.user.id;
    // Check if all required fields are provided
    if (!name || !brand || !price || !year || !imageUrl) {
        return res.status(400).json({ message: "All fields are required." });
    }   
    // Create a new car instance
    const newCar = new CarModel({
        name,
        brand,
        price,
        year,
        imageUrl,
        addedBy: userId 
    });
    // Save the car to the database
    await newCar.save();    
    res.status(201).json({
        message: "Car added successfully.",
        car: newCar
    });
   } catch (error) {
    console.error("Error adding car:", error);
   }
}

const GetCars = async (req , res) => {
    try {
        const cars = await CarModel.find().populate("addedBy", "username email ");
        res.status(200).json({
            message: "Cars fetched successfully.",
            cars: cars
        });

    } catch (error) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}

const GetCarById = async(req , res) => {
    const carId = req.params.id ; 
    try {
         const fetchCar = await CarModel.findById(carId)
         if (fetchCar) {
            res.status(200).json({
                message: "Car fetched successfully.",
                car: fetchCar
            })
         }
    } catch (error) {
        res.status(404).json({
            message : "error",
            error : error.message
        })
    }
   
}

const editCar = async(req , res) => {
    const {price} = req.body;
    const carID = req.params.id ;
  try {
      const updateData = await CarModel.findByIdAndUpdate(carID , {$set : {price}} , {new : true} );
    if (updateData) {
        res.status(200).json({
            message : "update successfuly"
        })
    }
  } catch (error) {
    res.status(404).json({
        message : "error",
        error : error.message
    })
  }

}

const deleteCar = async(req , res) => {
    const carID = req.params.id ;
   try {
     const DeleteData = await CarModel.findByIdAndDelete(carID);
    if (DeleteData) {
        res.status(200).json({
            message : "Car deleted successfully."
        })
    }
   } catch (error) {
    res.status(404).json({
        message : "error",
        error : error.message
    })
   }
}



module.exports = {    
    addingCar,
    GetCars,
    GetCarById,
    editCar,
    deleteCar
}