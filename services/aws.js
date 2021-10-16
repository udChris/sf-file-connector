const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const accessKeyId = 'AKIA4F4BZU53TUXDMEYE';
const secretAccessKey = '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';
const bucketName = 'udfileuploader';
const region = 'us-west-1';

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
});

// uploads a file to s3
exports.upload = (file) => {
    const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
        Bucket : bucketName,
        Body : fileStream,
        Key : file.filename
    }

    return s3.upload(uploadParams).promise();
}

// downloads a file from s3

//
