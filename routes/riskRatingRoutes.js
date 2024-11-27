const express = require("express");
const router = express.Router();

//import controller
const { riskRatingHandler } = require("../controller/riskRatingController");

// POST /api/risk-rating
router.post("/risk-rating", riskRatingHandler);

module.exports = router;
