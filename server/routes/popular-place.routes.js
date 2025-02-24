const express = require("express");
const router = express.Router();
const popularPlaceModel = require("../models/popular-place.model");

router.get("/", async (req, res) => {
  const popularPlaces = await popularPlaceModel.find();
  res.status(200).send(popularPlaces);
});

router.get("/:countryId", async (req, res) => {
  const popularPlaces = await popularPlaceModel.find({
    country: req.params.countryId,
  });
  res.status(200).send(popularPlaces);
});

module.exports = router;
