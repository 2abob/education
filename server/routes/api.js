const express = require('express');
const router = express.Router();

var connectionDB = require('./connectionDB')

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
router.get('/login', (req, res) => {
    connectionDB.login(req.query.login, req.query.password)
    .then((result) => {
        response.data = result
        res.json(response)
    })
})

module.exports = router;