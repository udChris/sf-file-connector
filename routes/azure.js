const express = require("express");
const router = express.Router();
const azureController = require('./../controllers/azureController');

const azureServices = require('../services/azure');

const multer = require("multer");
const upload = multer();

router
    .route('/')
    .get(azureController.get);

module.exports = router;

// router.get("/", [], async (req, res) => {
//
//     let filesToSend = await azureServices.getFilesFromDirectory(req.body.directoryName);
//     return res.send({...filesToSend});
// });
//
router.post("/", [upload.array("data")], async (req, res) => {

    console.log(req.body);
    console.log(req.files);
    let filesToSend = await azureServices.createNewFile(req.body.name,req.body.directory,req.files[0]);

    console.log(filesToSend);

    if(filesToSend){
        return res.status(200).send('SUCCESS');
    }
    else{
        return res.status(400).send('FAILED');
    }
});
//
// module.exports = router;