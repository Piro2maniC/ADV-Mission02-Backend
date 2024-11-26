const CarValuePresenter = require("../presenters/carValuePresenter");

/**
 * Handles the API request to calculate the numeric value of a word and year.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const handleConversion = (req, res) => {
  try {
    const { word, year } = req.body;

    // Validate inputs
    if (typeof word !== "string" || typeof year !== "number") {
      throw new Error(
        "Invalid input: 'word' must be a string and 'year' must be a number."
      );
    }

    // Process the inputs using the presenter
    const result = CarValuePresenter.processWordAndYear(word, year);

    // Send response
    res.json({ total: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handleConversion,
};
