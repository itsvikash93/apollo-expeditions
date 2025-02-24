const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const {
  getEnquiries,
  getEnquiryById,
  addOffer,
  addPackage,
  addCountry,
  addPopularPlace,
  addVlog,
} = require("../controllers/admin.controller");

router.get("/enquiries", getEnquiries);
router.get("/enquiries/:id", getEnquiryById);
router.post("/offers", addOffer);
router.post("/packages", addPackage);
router.post("/countries", addCountry);
router.post("/popular-places", addPopularPlace);
router.post("/vlogs", addVlog);
module.exports = router;
