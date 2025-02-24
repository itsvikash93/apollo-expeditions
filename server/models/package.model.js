const mongoose = require("mongoose");

// Define the Place schema
const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  offersAndPackages: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Offer",
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  pdfUrl: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Package", packageSchema);
