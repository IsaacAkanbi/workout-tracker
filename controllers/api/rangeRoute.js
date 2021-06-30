const router = require('express').Router();
const { Workout } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newWorkout = await Workout.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const workoutData = await Workout.destroy({
      where: {
        id: req.params.id,
        day: req.session.day,
        exercise: req.session.exercise 
      },
    });

    if (!workoutData) {
      res.status(404).json({ message: 'No workout found with this id!' });
      return;
    }

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;