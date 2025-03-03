const express = require("express");
const router = express.Router();
const {
  getEnquiries,
  getEnquiryById,
  addOffer,
  deleteOffer,
  addPackage,
  deletePackage,
  addCountry,
  deleteCountry,
  addPopularPlace,
  deletePopularPlace,
  addVlog,
  deleteVlog,
  addUpcomingTrip,
  deleteUpcomingTrip,
  addExperience,
  deleteExperience,
  addPartner,
  deletePartner,
} = require("../controllers/admin.controller");

router.get("/enquiries", getEnquiries);
router.get("/enquiries/:id", getEnquiryById);
router.post("/offers", addOffer);
router.delete("/offers/:id", deleteOffer);
router.post("/packages", addPackage);
router.delete("/packages/:id", deletePackage);
router.post("/countries", addCountry);
router.delete("/countries/:id", deleteCountry);
router.post("/popular-places", addPopularPlace);
router.delete("/popular-places/:id", deletePopularPlace);
router.post("/vlogs", addVlog);
router.delete("/vlogs/:id", deleteVlog);
router.post("/upcoming-trips", addUpcomingTrip);
router.delete("/upcoming-trips/:id", deleteUpcomingTrip);
router.post("/experiences", addExperience);
router.delete("/experiences/:id", deleteExperience);
router.post("/partners", addPartner);
router.delete("/partners/:id", deletePartner);
module.exports = router;
