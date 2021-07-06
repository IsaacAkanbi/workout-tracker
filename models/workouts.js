const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises : { type : Array , "default" : [] },
 
  day: {
    type: Date,
    default: Date.now
  }
});


const Workout = mongoose.model("Workouts", workoutSchema) ;

module.exports = Workout;
