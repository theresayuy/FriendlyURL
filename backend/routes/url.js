require("dotenv").config();
const express = require('express');
const router = express.Router();
const URLModel = require('../url-model');
const ALPHABET = require('../constants').alphabet;
const validURL = require('valid-url');

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
    // get all data
    try {
        URLModel.find({}).then((data) => {
            if (data) {
                res.json(data);
            } else {
                res.send([]);
            }
        }).catch(next);
    } catch (err) {
        console.log(err.toString());
    };
});

router.post("/urls", async (req, res, next) => {
    // add some URL data to end of database
    try {
        if (req.body.long && validURL.isUri(req.body.long)) {
            let newBody = {
                long: req.body.long,
                short: `${getRandomShortURLSuffix()}`
            };
    
            while ((await URLModel.find(
                {short: newBody.short}
            ).exec()).length > 0) {
                newBody = {
                    long: req.body.long,
                    short: `${getRandomShortURLSuffix()}`
                }
            } // don't allow duplicate short urls
    
            URLModel.create(newBody).then((data) => {
                res.json(data);
            }).catch(next); // attempt to post newBody to the database
        } else {
            console.log(`Your input, ${req.body.long}, isn't a valid URL.`);
        }
    } catch (err) {
        console.log(err.toString());
    }
});

module.exports = router;
