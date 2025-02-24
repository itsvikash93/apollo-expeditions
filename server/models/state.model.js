const mongoose = require("mongoose");

// Define the State schema
const stateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "State name is required"], // Ensures the name field is provided
    trim: true, // Removes extra spaces
    unique: true, // Ensure no two states have the same name
    minlength: [3, "State name must be at least 3 characters long"],
  },
  description: {
    type: String,
    required: [true, "Description is required"], 
    trim: true,
    maxlength: [500, "Description cannot exceed 500 characters"], 
  },
  places: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place", 
    },
  ],
  imageUrl: {
    type: String,
    required: [true, "Image URL is required"], 
    trim: true,
  },
});

module.exports = mongoose.model("State", stateSchema);
