const azureServices = require("../services/azure");
const multer = require("multer");
const upload = multer();

exports.multerMiddleWare = (req, res, next) => {
    upload.array("data");
    next();
}

exports.get = async (req, res) => {
    let filesToSend = await azureServices.getFilesFromDirectory(req.body.directoryName);
    return res.send({...filesToSend});
}

exports.post = async (req, res) => {
    azureServices.createNewFile(req.body.name,req.body.directory,req.files[0])
        .then(filesToSend => {
            res.status(200).json({
                status: "success",
                message : "Successfully uploaded the files!"
            })
        })
        .catch(e => {
            res.status(400).json({
                status: "FAILED",
                message : e
            })
        });
}