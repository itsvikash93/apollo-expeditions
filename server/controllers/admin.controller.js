const stateModel = require("../models/state.model");
const offerModel = require("../models/offer.model");
const packageModel = require("../models/package.model");
const enquiryModel = require("../models/enquiry.model");
const popularPlaceModel = require("../models/popular-place.model");
const vlogModel = require("../models/vlog.model");
const { putObjectURL } = require("../config/aws-setup");
const countryModel = require("../models/country.model");

require("dotenv").config();

module.exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await enquiryModel
      .find()
      .populate("state", "name") // Populate state name
      .populate("place", "name"); // Populate place name

    res.status(200).send(enquiries);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.getEnquiryById = async (req, res) => {
  try {
    const enquiry = await enquiryModel
      .findById(req.params.id)
      .populate("state", "name") // Populate state name
      .populate("place", "name"); // Populate place name

    if (!enquiry) {
      return res.status(404).send("Enquiry not found");
    }

    res.send(enquiry);
  } catch (error) {
    res.send(error);
  }
};

module.exports.addOffer = async (req, res) => {
  try {
    const { name, route } = req.body;
    let offer = await offerModel.findOne({ name: name });
    if (offer) {
      return res.status(400).send("This offer already exists");
    }

    offer = await offerModel.create({
      name,
      route,
    });

    res.status(201).send(offer);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.addPackage = async (req, res) => {
  try {
    const offerId = req.body.offer;
    // console.log(req.body);
    const offer = await offerModel.findById(offerId);

    if (!offer) {
      return res.status(400).send("Invalid offer ID");
    }
    const imageKey = `images/packages/${req.body.image}`;
    const pdfKey = `pdfs/packages/${req.body.pdf}`;

    // Handle Image Upload
    let imageUrls = null;
    if (req.body.image) {
      imageUrls = await putObjectURL(imageKey, "image/jpeg");
    }

    // Handle PDF Upload
    let pdfUrls = null;
    if (req.body.pdf) {
      pdfUrls = await putObjectURL(pdfKey, "application/pdf");
    }

    if (!imageUrls || !pdfUrls) {
      return res.status(400).send("Failed to upload image or PDF");
    }

    const package = await packageModel.create({
      name: req.body.name,
      offersAndPackages: offerId,
      description: req.body.description,
      imageUrl: imageUrls.fileUrl,
      pdfUrl: pdfUrls.fileUrl,
    });

    offer.packages.push(package._id);
    await offer.save();

    res
      .status(200)
      .send({ imageUrl: imageUrls.fileUrl, pdfUrl: pdfUrls.fileUrl });
  } catch (err) {
    res.status(400).send(err.message);
  }
};
module.exports.addPopularPlace = async (req, res) => {
  try {
    const countryId = req.body.country;
    // console.log(req.body);
    const country = await countryModel.findById(countryId);
    // console.log(country);

    if (!country) {
      return res.status(400).send("Invalid country ID");
    }
    const imageKey = `images/popular-places/${req.body.image}`;

    // Handle Image Upload
    let imageUrls = null;
    if (req.body.image) {
      imageUrls = await putObjectURL(imageKey, "image/jpeg");
    }

    if (!imageUrls) {
      return res.status(400).send("Failed to upload image");
    }

    const popularPlace = await popularPlaceModel.create({
      name: req.body.name,
      description: req.body.description,
      country: countryId,
      image: imageUrls.fileUrl,
      rating: req.body.rating,
    });

    country.popularPlaces.push(popularPlace._id);
    await country.save();

    res.status(200).send({ imageUrl: imageUrls.fileUrl });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports.addCountry = async (req, res) => {
  try {
    const { name } = req.body;
    let country = await countryModel.findOne({ name: name });
    if (country) {
      return res.status(400).send("This country already exists");
    }
    country = await countryModel.create({ name });
    res.status(201).send(country);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.addVlog = async (req, res) => {
  try {
    const newVlog = await vlogModel.create(req.body);
    res.status(201).send(newVlog);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
};
