const express = require("express")
const { dbConnection } = require("./config/db")
require("dotenv").config()
const userAuth = require("./routes/users/userauth")
const carRoute = require("./routes/cars/carRoute")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000

dbConnection()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/auth", userAuth)
app.use("/cars" , carRoute)
app.listen(port , () => {
    console.log(`listening to port ${port}`)
})

