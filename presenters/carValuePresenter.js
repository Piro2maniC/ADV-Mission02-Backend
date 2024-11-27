const CarValueModel = require("../models/carValueModel");

class CarValuePresenter {
  /**
   * Processes the word and year using the CarValueModel.
   * @param {string} word - The input word.
   * @param {number} year - The input year.
   * @returns {number} - The total numeric value.
   */
  static processWordAndYear(word, year) {
    return CarValueModel.calculateCarValue(word, year);
  }
}

module.exports = CarValuePresenter;
