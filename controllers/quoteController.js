const quotePresenter = require("../presenters/quotePresenter");

const calculateQuote = (req, res) => {
  //   console.log("Received body:", req.body);
  try {
    const inputJson = req.body;

    // Delegate the input processing to the presenter
    const result = quotePresenter.processInput(inputJson);

    // Return the calculated quotes
    res.status(200).json(result);
  } catch (error) {
    // Handle any errors and respond with an appropriate message
    res.status(400).json({ error: error.message });
  }
};

module.exports = { calculateQuote };
