// routes/masonryConfigRoutes.js

const express = require('express');
const router = express.Router();
const { getMasonryConfig, updateMasonryConfig } = require('../controllers/masonryConfigController');

// Route to get the masonry configuration
router.get('/', getMasonryConfig);

// Route to update the masonry configuration
router.post('/', updateMasonryConfig);

module.exports = router;
