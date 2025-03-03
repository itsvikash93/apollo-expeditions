const packageModel = require("../models/package.model");

module.exports.getPackages = async (req, res) => {
  const packages = await packageModel.find().populate("offersAndPackages");
  res.status(200).json(packages);
};

module.exports.getPackageById = async (req, res) => {
  const package = await packageModel.findById(req.params.id);
  res.status(200).json(package);
};

module.exports.addPackage = async (req, res) => {
  const package = await packageModel.create(req.body);
  res.status(201).json(package);
};

module.exports.updatePackage = async (req, res) => {
  const package = await packageModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(package);
};
