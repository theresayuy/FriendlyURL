const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const con = mongoose.connection;

module.exports = con;