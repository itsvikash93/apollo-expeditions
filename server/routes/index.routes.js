const express = require("express");
const {
  getStates,
  getEnquiryFormData,
  getPlaces,
  sendEnquiry,
} = require("../controllers/index.controller");

const router = express.Router();

router.get("/states", getStates);
router.get("/places", getPlaces);
router.get("/enquiry-form", getEnquiryFormData);
router.post("/enquiry-form", sendEnquiry);

module.exports = router;
