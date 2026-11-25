const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
});

const Status = mongoose.model("status", statusSchema);
module.exports = Status;
