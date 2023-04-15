const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    ageGroup: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    exercisesCount: {
      type: Number,
      required: true,
    },
    totalDuration: {
      type: String,
      required: true,
    },
    performedCount: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    exercise: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Exercise',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Workout', workoutSchema);