const { Workout } = require('../models');
const db = require('../models');
const router = require('express').Router();
// GET
router.get('/workouts', async (req, res) => {
    try {
        const viewWorkouts = await Workout.find();
        res.json(viewWorkouts)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});
// GET
router.get('/workouts/range', async (req, res) => {
    try {
        const workoutRange = await Workout.find({}). limit(7);
        res.json(workoutRange);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
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
            res.json(workout);
        })
    // try {
    //     const updateWorkout = await res.workout.findByIdAndUpdate(
    //         req.params.id,
    //         {$push:{
    //             exercises: req.body
    //         }}
    //     );
    //     res.json(updateWorkout);
    // } catch (err) {
    //     res.status(400).json({ message: err.message })
    // }
});

module.exports = router;