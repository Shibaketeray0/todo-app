const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model('Task', taskSchema);
