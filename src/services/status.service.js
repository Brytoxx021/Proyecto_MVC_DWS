const statusModel = require("../models/status.model");

exports.getAll = async () => await statusModel.find();
