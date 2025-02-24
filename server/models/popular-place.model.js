const mongoose = require("mongoose");

const popularPlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
  },
});

const PopularPlace = mongoose.model("PopularPlace", popularPlaceSchema);
module.exports = PopularPlace;
