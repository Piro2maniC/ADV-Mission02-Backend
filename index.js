const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter");
const carValueRouter = require("./routes/carValueRouter");
const quoteRouter = require("./routes/quoteRouter");

// Enable express
const app = express();
//Middleware run middleware function before the request gets into route handler
app.use(cors());
app.use(bodyParser.json());

// Use the router for a specific path
app.use("/api", userRouter);
app.use("/api", carValueRouter);
app.use("/api/quote", quoteRouter);

// default route handler
app.get("/", (req, res) => {
  res.send("hello world");
});

// Set up port
const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
