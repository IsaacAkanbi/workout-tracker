const router = require("express").Router();
const Workout = require("../models/workouts.js");



router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ day: -1 }).limit(1)
    .then(dbWorkout => {
    console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
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


module.exports = router;