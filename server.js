const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// const path = require('path');
const viewRoutes = require('./routes/views');
const apiRoutes = require('./routes/api-routes');

const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Route requirements
app.use('/', viewRoutes);
app.use('/api', apiRoutes);

mongoose.connection.on('error', (err) =>
  console.log(`error in mongoose conneciton: ${err.message}`)
);

mongoose.connection.once('open', () => {
  console.log('mongoose connected!');
  app.listen(PORT, (err) => console.log(`App is running at: http://localhost/${PORT}`));
});