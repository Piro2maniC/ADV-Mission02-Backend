const express = require("express");
const { handleConversion } = require("../controllers/carValueController");

const router = express.Router();

/**
 * POST /api/convert
 * Handles word-to-number conversion and returns the total.
 */
router.post("/convert", handleConversion);

module.exports = router;
