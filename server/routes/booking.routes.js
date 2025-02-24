const express = require("express");
const bookingModel = require("../models/booking.model");
const router = express.Router();

// Create a new booking
router.post("/", async (req, res) => {
  try {
    const newBooking = new bookingModel(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get bookings by user ID
router.get("/:userId", async (req, res) => {
  try {
    const bookings = await bookingModel.find({ userId: req.params.userId }).populate(
      "offerId"
    );
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cancel a booking
router.delete("/:id", async (req, res) => {
  try {
    const deletedBooking = await bookingModel.findByIdAndDelete(req.params.id);
    if (!deletedBooking)
      return res.status(404).json({ message: "Booking not found" });
    res.json({ message: "Booking cancelled" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
