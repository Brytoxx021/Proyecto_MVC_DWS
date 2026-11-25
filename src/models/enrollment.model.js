const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  enrollmentDate: {
    type: Date,
    required: true,
  },
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "status",
    required: true,
  },
  notes: {
    type: String,
  },
});

const Enrollment = mongoose.model("enrollment", enrollmentSchema);
module.exports = Enrollment;
