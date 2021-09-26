const express = require("express");
const router = express.Router();

const azureServices = require("../services/azure");


// region GET
router.get("/", [], async (req, res) => {

    let filesToSend = await azureServices.getFilesFromDirectory(req.body.directoryName);
    return res.send({...filesToSend});
});

module.exports = router;