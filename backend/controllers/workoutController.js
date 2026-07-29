const getWorkouts = (req, res) => {
  res.status(200).json({ message: "Get all workouts" })
}

const getWorkout = (req, res) => {
  res.status(200).json({ message: "Get a single workout" })
}

const createWorkout = (req, res) => {
  res.status(200).json({ message: "Create a workout" })
}

const deleteWorkout = (req, res) => {
  res.status(200).json({ message: "Delete a workout" })
}

const updateWorkout = (req, res) => {
  res.status(200).json({ message: "Update a workout" })
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
}