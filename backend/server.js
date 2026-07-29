require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const app = express()
const workoutRoutes = require("./routes/workouts")

app.use("/api/workouts", workoutRoutes)
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Workout Tracker API" })
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Connected to DB")
        console.log(`Server running on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(err)
})