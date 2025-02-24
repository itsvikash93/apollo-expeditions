const express = require("express");
const router = express.Router();
const packageModel = require("../models/package.model");

router.get("/", async (req, res) => {
  const packages = await packageModel.find();
  res.status(200).json(packages);
});

router.get("/:id", async (req, res) => {
  const package = await packageModel.findById(req.params.id);
  res.status(200).json(package);
});

router.put("/:id", async (req, res) => {
  const package = await packageModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(package);
});

router.delete("/:id", async (req, res) => {
  await packageModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Package deleted" });
});

module.exports = router;
