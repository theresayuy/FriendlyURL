const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for url data
const URLSchema = new Schema({
    long: {
        type: String,
        required: [true, "The long URL is required."],
    },
    short: {
        type: String,
        required: [true, "The short URL is required."]
    }
});

// Create model for url data
const URLModel = mongoose.model("url", URLSchema);
module.exports = URLModel;