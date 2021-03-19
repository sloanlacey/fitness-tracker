const Workout = require('../models/Workout');
const router = require('express').Router();

// GET
router.get('/workouts', async (req, res) => {
    console.log('We hit this duration route!');
    const viewWorkouts = await Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercises.duration' },
        }
    }]);
    console.log(viewWorkouts);
    res.json(viewWorkouts);
});

// GET
router.get('/workouts/range', async (req, res) => {
    console.log('We hit this range route!');
  const workoutRange = await Workout.aggregate([{
      $addFields: {
          totalDuration: { $sum: '$exercises.duration' },
      }
  }]).limit(7);
  console.log(workoutRange);
  res.json(workoutRange);
});

// POST
router.post('/workouts', async (req, res) => {
    try {
        const newWorkout = await Workout.create(req.body);
        res.json(newWorkout);
        res.json(newWorkout)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
  });

// PUT
router.put('/workouts/:id', async (req, res) => {
    await Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
        .then(workout => {
            res.json(workout);
        })
});

module.exports = router;