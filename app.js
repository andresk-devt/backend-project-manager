require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", require('./routes'))

const PORT = process.env.PORT || 3000;

dbConnect();

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/`)
});
