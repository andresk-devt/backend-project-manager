require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");

async function initializeApp() {
  await dbConnect();
  startServer();
}

function startServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/api", require("./routes"));

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}/`);
  });
}

initializeApp();