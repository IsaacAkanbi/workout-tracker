const router = require("express").Router();
const Workout = require("../models/workouts.js");
const path = require('path');
var mongojs = require("mongojs");

router.get("/api/workouts", (req, res) => {
  Workout.find({}).sort({ day: -1 }).limit(1)
  
  // Workout.find({})
    // .sort({ day: -1 }).limit(1)
    .then(dbWorkout => {
    console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get('/exercise',function(req,res){
  res.sendFile(path.join(__dirname+'../../public/exercise.html'));
});

router.get('/stats',function(req,res){
  res.sendFile(path.join(__dirname+'../../public/stats.html'));
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.updateOne({"_id":  mongojs.ObjectId(req.params.id)}, {$push: {exercises: req.body}})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate( [
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }  /// required for Line chart on the stats page
        }
      }
    ] ).sort({ day: -1 }).limit(7)
    
    .then(dbWorkout => {
       console.log(dbWorkout);
       res.json(dbWorkout);
     })
     .catch(err => {
      // console.log(err);
       res.json(err);
     });
 });


module.exports = router;