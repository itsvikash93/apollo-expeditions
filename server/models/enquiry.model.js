const mongoose = require("mongoose");

const enquirySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
  },
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "State",
    required: [true, "State selection is required"],
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
    required: [true, "Place selection is required"],
  },
  message: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  visitDate: {
    type: String, 
    required: true,
  },
});

module.exports = mongoose.model("Enquiry", enquirySchema);
