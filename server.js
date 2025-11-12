const express = require("express");
const logger = require("./middleware/logger");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Port
const PORT = process.env.PORT || 8000;

// middleware
app.use(logger);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["*"],
    methods: ["GET", "POST", "PUT", "PTACH", "DELETE"],
  })
);

// testing
app.use("/", (req, res) => {
  return res.send("api testing").status(200);
});


// listen
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
