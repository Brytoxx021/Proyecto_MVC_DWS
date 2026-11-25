const enrollmentModel = require("../models/enrollment.model");

// CREATE

exports.create = async (data) => {
  const newEnrollment = new enrollmentModel(data);
  return await newEnrollment.save();
};

// READ

exports.getAll = async () => await enrollmentModel.find().populate("status", "name");
exports.getById = async (id) => await enrollmentModel.findById(id).populate("status", "name");
exports.getByUserId = async (userId) => await enrollmentModel.find({ userId: userId });
exports.getByCourseId = async (courseId) => await enrollmentModel.find({ courseId: courseId });

// UPDATE

exports.update = async (id, data) => {
  return await enrollmentModel.findByIdAndUpdate(id, datos);
};

// DELETE

exports.remove = async (id) => {
  return await enrollmentModel.findByIdAndDelete(id);
};
