const express = require("express");
const router = express.Router();
const quoteController = require("../controllers/quoteController");

router.post("/", quoteController.calculateQuote);

module.exports = router; //for testing
