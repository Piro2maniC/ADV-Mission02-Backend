const quoteModel = require("../models/quoteModel");

class quotePresenter {
  /**
   * Calculates yearly and monthly quotes.
   * @param {number} carValue - The car's value.
   * @param {number} riskRating - The risk rating.
   * @returns {Object} - An object containing yearly and monthly quotes.
   */
  static processInput(inputJson) {
    // Validation logic
    if (!inputJson) {
      throw new Error("Input is empty");
    }
    if (typeof inputJson !== "object") {
      throw new Error("Input is not JSON");
    }
    if (!inputJson.car_value || !inputJson.risk_rating) {
      throw new Error("car_value or risk_rating empty");
    }
    if (isNaN(parseFloat(inputJson.car_value))) {
      throw new Error("car_value must be a number");
    }
    if (
      inputJson.car_value <= 0 ||
      inputJson.risk_rating < 1 ||
      inputJson.risk_rating > 5
    ) {
      throw new Error(
        "car_value cannot be <0, risk_rating must be between 1 and 5 inclusive"
      );
    }
    if (!Number.isInteger(parseFloat(inputJson.risk_rating))) {
      throw new Error("risk_rating must be integer");
    }

    // Delegate the core calculation to the model
    return quoteModel.calculateQuotes(
      parseFloat(inputJson.car_value),
      parseInt(inputJson.risk_rating)
    );
  }
}

module.exports = quotePresenter;
