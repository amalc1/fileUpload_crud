const mongoose = require("mongoose");

const FileSystemSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  structure: { type: String },
});

const FileSystem = mongoose.model("FileSystem", FileSystemSchema);

module.exports = FileSystem;
