const router = require('express').Router();
const Workout = require('../models/Workout')

router.get('/api/workouts', (req, res) => {
    res.send('/api/workouts has been reached!');
  });

module.exports = router;