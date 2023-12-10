require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});

dbConnect();