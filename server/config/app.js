const dotenv = require("dotenv").config();
const path = require("path");

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};
