/** @format */

const mongoose = require("mongoose");

const transcriptSchema = mongoose.Schema({
  transcript: {
    type: String,
  },
} ,{ timestamps: true });

module.exports = mongoose.model("Transcript", transcriptSchema);
