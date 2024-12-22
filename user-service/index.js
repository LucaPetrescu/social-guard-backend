const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5001;

require("dotenv").config();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
