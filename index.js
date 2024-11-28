const cors = require("cors");
const express = require("express");
require("dotenv").config();

//import routes
const riskRatingRouter = require("./routes/riskRatingRouter");
const bodyParser = require("body-parser");
const carValueRouter = require("./routes/carValueRouter");
const quoteRouter = require("./routes/quoteRouter");

// Enable express
const app = express();

//Middleware run middleware function before the request gets into route handler
app.use(cors());
app.use(express.json()); //parses incoming JSON
app.use(bodyParser.json());

// Use the router for a specific path
app.use("/api", carValueRouter);
app.use("/api/quote", quoteRouter);
app.use("/api", riskRatingRouter);

// default route handler
app.get("/", (req, res) => {
  res.send("hello world");
});

// Set up port
const PORT = process.env.SERVER_PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

module.exports = app;
