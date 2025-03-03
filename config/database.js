const mongoose = require("mongoose");
require("dotenv").config();
exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB", err);
      process.exit(1);
    });
};
