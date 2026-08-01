require("dotenv").config()

const express = require("express")

const mongoose = require("mongoose")
const app = express()
const workoutRoutes = require("./routes/workouts")
const userRoutes = require("./routes/user")

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use("/api/workouts", workoutRoutes)
app.use("/api/user", userRoutes)


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