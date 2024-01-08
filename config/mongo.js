const mongoose = require("mongoose");
const chalk = require("chalk");

const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;

  try {
    await mongoose.connect(DB_URI, {
      writeConcern: {
        w: "majority",
        j: true,
        wtimeout: 1000,
      },
    });
    console.log(chalk.bgGreen("Connected to MongoDB"));
  } catch (err) {
    console.log(
      chalk.bgRed("Error when trying to connect to the database", err)
    );
  }
};

module.exports = dbConnect;
