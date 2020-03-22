const express = require('express');
const router = express.Router();

// @route  POST api/files/upload
// @desc   Upload Route
// @aceess Public
router.post('/upload', uploadController.uploadForm);

module.exports = router;
