const express = require('express');
const router = express.Router();
const URLModel = require('../url-model');

router.get('/:address', async (req, res) => {
    // find the data of the URL that has the short URL entered in the address bar
    const urlData = await URLModel.findOne({short: req.params.address});

    if (urlData) {
        return res.redirect(urlData.long);
    } else {
        return res.status(404).json('No URL Found');
    }
})

module.exports = router;
