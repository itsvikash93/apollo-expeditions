const express = require("express");
const router = express.Router();
const {
  addTripEnquiry,
  addPackageEnquiry,
} = require("../controllers/enquiry.controller");

router.post("/trip", addTripEnquiry);
router.post("/package", addPackageEnquiry);

module.exports = router;
