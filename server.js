const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const viewRoutes = require('./routes/views');
// const apiRoutes = require('./routes/api');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('tiny'));
// Route requirements
app.use('/', viewRoutes);
// app.use('/api', apiRoutes);


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitnessTrackDB', { useNewUrlParser: true });

mongoose.connection.on('error', (err) =>
  console.log(`error in mongoose conneciton: ${err.message}`)
);

mongoose.connection.once('open', () => {
  console.log('mongoose connected!');
  app.listen(PORT, (err) => console.log(`App is running at: http://localhost/${PORT}`));
});