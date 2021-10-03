const express = require('express');
const fileController = require('./../controllers/fileController');
const router = express.Router();

router
    .route('/')
    .post(fileController.createFile)
    .get(fileController.getFileDirectory);

module.exports = router;