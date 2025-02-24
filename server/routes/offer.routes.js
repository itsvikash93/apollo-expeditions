const express = require("express");
const offerModel = require("../models/offer.model");
const router = express.Router();

// Get all offers
router.get("/", async (req, res) => {
  try {
    const offers = await offerModel.find();
    res.status(200).json(offers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single offer by ID
router.get("/:slug", async (req, res) => {
  try {
    const offer = await offerModel
      .findOne({ slug: req.params.slug })
      .populate("packages");
    if (!offer) return res.status(404).json({ message: "Offer not found" });
    res.json(offer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new offer (Admin only)
router.post("/", async (req, res) => {
  try {
    const newOffer = await offerModel.create(req.body);
    res.status(201).json(newOffer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
