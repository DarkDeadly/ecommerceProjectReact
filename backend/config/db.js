const mongoose = require("mongoose")

 const dbConnection = async() => {
    try {
       if (!process.env.DATABASE_URL) {
        console.log("DATABASE_URL is not defined in environment variables.")
       }
        await mongoose.connect(process.env.DATABASE_URL)
       console.log("database successfully connected")
       
    } catch (error) {
        console.log(error)
        console.error("Failed to connect to the database. Please check your connection string and network settings.")
    }
}

module.exports = { dbConnection }

