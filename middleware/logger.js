const fs = require("fs");
const path = require("path");

const logger = (req, res, next) => {
  const date = new Date();
  const time =
    date.toLocaleDateString() +
    " -- " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  const log = `${time}  -- ${req.method} -- ${req.originalUrl} -- ${res.statusCode}`;
  console.log(log);
  fs.appendFileSync(path.join(__dirname, "..", "logs", "logs.txt"), log + "\n");
  next();
};

module.exports = logger;
