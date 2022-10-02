const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const urlRoute = require('./routes/url');
const redirectRoute = require('./routes/redirect');
const app = express();
const PORT = process.env.PORT || 8080

require("dotenv").config();

// database connection
const connection = require('./db-config')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

// backend
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse incoming request body in JSON format

// routes
app.use("/api", urlRoute);
app.use("/", redirectRoute);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}.`);
});
