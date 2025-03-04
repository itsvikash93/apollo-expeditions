const mongoose = require("mongoose");

const packageEnquirySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
  },
  message: {
    type: String,
    trim: true,
  },
  packageTitle: {
    type: String,
    required: [true, "Package title is required"],
    trim: true,
  },
});

module.exports = mongoose.model("PackageEnquiry", packageEnquirySchema);
