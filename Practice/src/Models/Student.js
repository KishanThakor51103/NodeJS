const mongoose = require("mongoose");

// Schema → structure of student
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  course: {
    type: String,
    default: "General"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Model → collection
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;