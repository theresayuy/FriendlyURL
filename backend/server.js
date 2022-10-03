const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const urlRoute = require('./routes/url');
const redirectRoute = require('./routes/redirect');
const connection = require('./db-config');
const PORT = process.env.PORT || 8080

// init app
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse incoming request body in JSON format

// database connection
connection.once('open', () => console.log('DB Connected'));
connection.on('error', () => console.log('Error'));

// setup routes
app.use("/api", urlRoute);
app.use("/", redirectRoute);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}.`);
});
