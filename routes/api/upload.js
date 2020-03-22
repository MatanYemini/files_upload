const express = require('express');
const router = express.Router();
const uploadController = require('../../controllers/upload');

// @route  POST api/files/upload/:page
// @desc   Upload Route
// @aceess Public
router.post('/upload/:page', uploadController.uploadForm);

module.exports = router;
