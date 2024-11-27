const express = require("express");
const router = express.Router();

//import controller
const { riskRatingHandler } = require("../controllers/riskRatingController");

// POST /api/risk-rating
router.post("/riskRating", riskRatingHandler);

module.exports = router;
