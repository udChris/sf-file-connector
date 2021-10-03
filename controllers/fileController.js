
exports.createFile = async (req, res) => {
    res.status(201).json({
        status: 'success',
        data: {
            fileData : req.body
        }
    })
}