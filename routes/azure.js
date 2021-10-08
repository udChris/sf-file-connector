const express = require("express");
const router = express.Router();
const azureController = require('./../controllers/azureController');

router
    .route('/')
    .post(azureController.post)
    .get(azureController.get);

module.exports = router;

// router.get("/", [], async (req, res) => {
//
//     let filesToSend = await azureServices.getFilesFromDirectory(req.body.directoryName);
//     return res.send({...filesToSend});
// });
//
// router.post("/", [], async (req, res) => {
//
//     let filesToSend = await azureServices.createNewFile(req.body.name,req.body.directory,req.body.data);
//
//     console.log(filesToSend);
//
//     if(filesToSend){
//         return res.status(200).send('SUCCESS');
//     }
//     else{
//         return res.status(400).send('FAILED');
//     }
// });
//
// module.exports = router;