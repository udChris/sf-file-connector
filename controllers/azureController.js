const azureServices = require("../services/azure");
const multer = require("multer");
const upload = multer();

// exports.multerMiddleWare = (req, res, next) => {
//     [upload.array("data")];
//     next();
// }

exports.getFiles = async (req, res) => {
    let filesToSend = await azureServices.getFilesFromDirectory('udfileshare', req.body.directoryName);
    return res.send({...filesToSend});
}

exports.postFile = async (req, res) => {
    try {
        await azureServices.createNewFile(req.body.filename, req.body.directory, req.files[0]);
        return res.status(200).json({
            status : 'Success',
            message : 'successfully uploaded file',
            data : {
                fileName : req.body.filename
            }
        })
    } catch(e){
        return res.status(400).json({
            status : 'FAILED',
            message : 'Failed to upload Date',
            error : e.message
        })
    }
}

exports.deleteFile = async (req, res) => {
    try {
        await azureServices.deleteFile(req.body.filename, 'udfileshare', req.body.directory);
    } catch(e){
        return res.status(400).json({
            status : 'FAILED',
            message : 'Failed to upload Date',
            error : e.message
        })
    }
}

exports.createDirectory = async (req, res) => {

}

exports.createNewFileShare = async(req, res) => {

}
