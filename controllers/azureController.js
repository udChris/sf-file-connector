const azureServices = require("../services/azure");

exports.get = async (req, res) => {
    let filesToSend = await azureServices.getFilesFromDirectory(req.body.directoryName);
    return res.send({...filesToSend});
}

exports.post = async (req, res) => {
    let filesToSend = await azureServices.createNewFile(req.body.name,req.body.directory,req.body.data);

    console.log(filesToSend);

    if(filesToSend){
        return res.status(200).send('SUCCESS');
    }
    else{
        return res.status(400).send('FAILED');
    }
}