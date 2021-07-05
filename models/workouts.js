const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// { type : Array , "default" :
const workoutSchema = new Schema({
  exercises : { type : Array , "default" : [] },
 
  // exercises :
  //   {type: String,
  //   name: String,
  //   duration: Number,
  //   weight: Number,
  //   reps: Number,
  //   sets: Number
  // },
  day: {
    type: Date,
    default: Date.now
  }
});

// const exerciseSchema = new Schema(
//   {
//     type: String,
//     name: String,
//     duration: Number,
//     weight: Number,
//     reps: Number,
//     sets: Number
//   });
const Workout = mongoose.model("Workouts", workoutSchema) ;

module.exports = Workout;
