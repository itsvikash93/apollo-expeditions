const express = require("express");
const vlogModel = require("../models/vlog.model");
const router = express.Router();

// Get all vlogs
router.get("/", async (req, res) => {
  try {
    const vlogs = await vlogModel.find();
    res.json(vlogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single vlog by ID
router.get("/:id", async (req, res) => {
  try {
    const vlog = await vlogModel.findById(req.params.id);
    if (!vlog) return res.status(404).json({ message: "Vlog not found" });
    res.json(vlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new vlog (Admin only)


module.exports = router;
