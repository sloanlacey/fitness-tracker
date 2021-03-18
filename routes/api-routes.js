const { Workout } = require('../models');
const router = require('express').Router();

// GET
router.get('/workouts', async (req, res) => {
    const viewWorkouts = await Workout.aggregate([{
        $addFields: {
            workoutDuration: { $sum: '$exercises.duration' },
        }
    }]);
    res.status(201).json(viewWorkouts);
});

// GET
router.get('/workouts/range', async (req, res) => {
  const workoutRange = await Workout.aggregate([{
      $addFields: {
          workoutDuration: { $sum: '$exercises.duration' },
      }
  }]).limit(7);
  res.status(201).json(workoutRange);
});

// POST
router.post('/workouts', async (req, res) => {
    try {
        const newWorkout = await Workout.create(req.body);
        res.json(newWorkout);
        res.status(201).json(newWorkout)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
  });

// PUT
router.put('/workouts/:id', async (req, res) => {
    await Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
        .then(workout => {
            res.status(201).json(workout);
        })
});

module.exports = router;