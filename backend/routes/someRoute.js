// backend/routes/someRoute.js

const express = require('express');
const router = express.Router();
const { someControllerMethod } = require('../controllers/someController');

router.get('/some-route', someControllerMethod);

module.exports = router;
