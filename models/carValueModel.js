class CarValueModel {
  /**
   * Calculates the numeric value of a word and adds the year.
   * @param {string} word - The input word.
   * @param {number} year - The year to add to the total.
   * @returns {number} - The total numeric value.
   */
  static calculateCarValue(word, year) {
    // Clean the input word: remove non-alphabetic characters and convert to lowercase
    const cleanWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();

    // Calculate the word's numeric value
    const wordValue = cleanWord
      .split("")
      .reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0);

    // Return the sum of the word's value and the year
    return wordValue + year;
  }
}

module.exports = CarValueModel;
