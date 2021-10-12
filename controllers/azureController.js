const azureServices = require("../services/azure");
const multer = require("multer");
const upload = multer();

// exports.multerMiddleWare = (req, res, next) => {
//
//     next();
// }

exports.get = async (req, res) => {
    let filesToSend = await azureServices.getFilesFromDirectory(req.body.directoryName);
    return res.send({...filesToSend});
}

exports.post = async (req, res) => {
    let filesToSend = await azureServices.createNewFile(req.body.name, req.body.directory, req.files[0]);

    console.log(filesToSend);

    if (filesToSend) {
        return res.status(200).send('SUCCESS');
    } else {
        return res.status(400).send('FAILED');
    }


    // try {
    //     await azureServices.createNewFile(req.body.name,req.body.directory,req.files[0])
    //     res.status(200).json({
    //         status: "success",
    //         message : "Successfully uploaded the files!"
    //     })
    // } catch(e) {
    //     res.status(400).json({
    //         status: "FAILED",
    //         message : e
    //     })
    // }
}