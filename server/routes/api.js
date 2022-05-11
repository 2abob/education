const express = require('express');
const router = express.Router();

var test = require('./test')

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/test', (req, res) => {
    test.test()
    .then((result) => {
        response.data = result
        res.json(response)
    })
})

module.exports = router;