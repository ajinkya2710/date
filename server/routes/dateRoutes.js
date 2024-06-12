const express = require('express');
const { dateCheck } = require('../controllers/dateCheckController');


const router= express.Router();

router.post('/check-date', dateCheck);

module.exports= router;