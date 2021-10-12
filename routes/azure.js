const express = require("express");
const router = express.Router();
const azureController = require('./../controllers/azureController');

const azureServices = require('../services/azure');

const multer = require("multer");
const upload = multer();

router
    .route('/')
    .get(azureController.get)
    .post([upload.array("data")], azureController.post);

module.exports = router;

// router.get("/", [], async (req, res) => {
//
//     let filesToSend = await azureServices.getFilesFromDirectory(req.body.directoryName);
//     return res.send({...filesToSend});
// });
//
// router.post("/", [upload.array("data")], async (req, res) => {
//     try {
//         await azureServices.createNewFile(req.body.filename, req.body.directory, req.files[0]);
//         return res.status(200).json({
//             status : 'Success',
//             message : 'successfully uploaded file',
//             data : {
//                 fileName : req.body.filename
//             }
//         })
//     } catch(e){
//         return res.status(400).json({
//             status : 'FAILED',
//             message : 'Failed to upload Date',
//             error : e.message
//         })
//     }
// });
//
// module.exports = router;