const azureServices = require("../services/azure");

exports.get = async (req, res) => {
    let filesToSend = await azureServices.getFilesFromDirectory(req.body.directoryName);
    return res.send({...filesToSend});
}

exports.post = async (req, res) => {
    try {
        console.log(req);
        // console.log(req.body);
        let filesToSend = await azureServices.createNewFile(req.body.filename,req.body.directory,req.body.data);
        if(filesToSend){
            console.log(filesToSend);
            return res.status(200).send('SUCCESS');
        }
        else{
            return res.status(400).send('FAILED');
        }
    } catch(e){
        console.log('ERROR: ' + e);
        return res.status(400).send('FAILED');
    }
}