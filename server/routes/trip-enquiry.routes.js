const express = require("express");
const router = express.Router();
const { addTripEnquiry } = require("../controllers/trip-enquiry.controller");

router.post("/", addTripEnquiry);

module.exports = router;
