require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const numberRoutes = require('./routes/numberRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/numbers', numberRoutes);

// Error handling
app.use(errorHandler);

module.exports = app; 