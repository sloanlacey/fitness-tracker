const router = require('express').Router();
// const path = require('path');

router.get('/api/workouts', (req, res) => {
    res.send('/api/workouts has been reached!');
  });

module.exports = router;