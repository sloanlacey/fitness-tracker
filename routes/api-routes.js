const router = require('express').Router();
const Workout = require('../models/Workout')

// GET all workouts (view all workouts)
router.get('/api/workouts', async (req, res) => {
    try {
        const viewWorkouts = await Workout.find();
        res.json(viewWorkouts);
    } catch (err) {
        res.status(400);
        res.send(`Error Message: ${err}`);
    }
});

router.get('/api/workouts/range', async (req, res) => {
    try {
        const range = await Workout.find().limit(7);
        res.json(range);
    } catch (err) {
        res.status(400);
        res.send(`Error Message: ${err}`);
    }
});

router.post('/api/workouts', (req, res) => {
    
});

module.exports = router;