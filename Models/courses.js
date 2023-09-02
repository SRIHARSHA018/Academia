// Course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  instructor: {
    type: String,
    required: true,
  },
  duration: Number,
});

module.exports = mongoose.model('Course', courseSchema);