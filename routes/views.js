const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    console.log('Index has been reached!');
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

router.get('/exercise', (req, res) => {
    console.log('Exercise has been reached!');
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

router.get('/stats', (req, res) => {
    console.log('Stats has been reached!');
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  }); 

  module.exports = router;