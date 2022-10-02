const express = require('express');
const router = express.Router();
const URLModel = require('../url-model');
const ALPHABET = require('../constants').alphabet;
const validURL = require('valid-url');
const PORT = (process.env.PORT) || 3000;

function getRandomShortURLSuffix() {
    let result = "";
    for (let i = 0; i < 6; i++) {
        result += ALPHABET.charAt(
            Math.floor(Math.random() * (ALPHABET.length - 1))
        );
    }

    return result;
} // returns a string of length 6 of random characters

router.get("/urls", (req, res, next) => {
    // get all data, expose only the long and short fields to the client
    URLModel.find({}, "long short").then((data) => {
        res.json(data);
    }).catch(next);
});

router.post("/urls", (req, res, next) => {
    // add some URL data to end of database
    if (req.body.long && validURL.isUri(req.body.long)) {
        let newBody = {
            long: req.body.long,
            short: `http:localhost:${PORT}/${getRandomShortURLSuffix()}`
        };

        while ((await URLModel.find(
            {short: newBody.short}, "long short"
        ).then((data) => {
            return JSON.parse(data);
        })).length > 0) {
            newBody = {
                long: req.body.long,
                short: `http:localhost:${PORT}/${getRandomShortURLSuffix()}`
            }
        } // don't allow duplicate short urls

        URLModel.create(newBody).then((data) => {
            res.json(data);
        }).catch(next); // add url data to the db
    } else {
        res.send("Either the long or short fields are empty.");
    }
});

module.exports = router;
