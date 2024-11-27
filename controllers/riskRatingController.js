const { calculateRiskRating } = require("../models/riskRatingModel");

const riskRatingHandler = (req, res) => {
  const { claimHistory } = req.body; //this destructures claim history from request body

  if (!claimHistory) {
    return res.status(400).json({
      error: "Invalid input: Claim history cannot be empty",
    });
  }

  if (typeof claimHistory !== "string") {
    return res.status(400).json({
      error: "Invalid input: claim history must be string",
    });
  }

  //call model to calculate the risk rating
  const riskRating = calculateRiskRating(claimHistory);

  return res.json({ riskRating });
};

module.exports = { riskRatingHandler }; //tests
