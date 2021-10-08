
exports.createFile = async (req, res) => {
    return res.status(201).json({
        status: 'success',
        data: {
            fileData : req.body
        }
    })
}

exports.getFileDirectory = async(req, res) => {
    // Get Files from Azure, AWS, etc. based on request directory
    let retrievedData = '';

    return res.status(201).json({
        status : 'success',
    })
}