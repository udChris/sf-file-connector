
exports.createFile = async (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            fileData : req.body
        }
    })
}