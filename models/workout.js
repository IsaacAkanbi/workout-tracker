const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercise: [], 
  
  day: {
    type: Date,
    default: Date.now
  }
});

const exerciseSchema = new Schema(
  {
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
  });
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
