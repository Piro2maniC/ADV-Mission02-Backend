class quoteModel {
  /**
   * Calculates yearly and monthly quotes.
   * @param {number} carValue - The car's value.
   * @param {number} riskRating - The risk rating.
   * @returns {Object} - An object containing yearly and monthly quotes.
   */
  static calculateQuotes(carValue, riskRating) {
    const quoteYearly = Number(((carValue * riskRating) / 100).toFixed(2));
    const quoteMonthly = Number((quoteYearly / 12).toFixed(2));

    return { quoteYearly, quoteMonthly };
  }
}

module.exports = quoteModel;
