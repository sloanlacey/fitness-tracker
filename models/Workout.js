const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        trim: true,
        required: true,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true,
            validate: [({ length }) => length <= 75, 'Exercise type is too long! Please try a shorter version.']
        },

        name: {
            type: String,
            trim: true,
            required: true,
            validate: [({ length }) => length <= 75, 'Exercise name is too long! Please try a shorter version.']
        },

        duration: {
            type: Number,
            trim: true,
            required: true,
            default: 0
        },

        weight: {
            type: Number,
            trim: true
        },

        reps: {
            type: Number,
            trim: true
        },

        sets: {
            type: Number,
            trim: true
        },

        distance: {
            type: Number,
            trim: true
        }
    }],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;