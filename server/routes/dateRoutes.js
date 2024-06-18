const express = require('express');
const { dateCheck, downloadFile } = require('../controllers/dateCheckController');

const router = express.Router();

// Handle POST request for date check
router.post('/check-date', dateCheck);

// Handle GET request to download a file
router.get('/check-date', downloadFile);

module.exports = router;
