/**
 * @author: Chris Gibson
 * @description: this class represents the azure SDK and connection code layer for the sf-file-connector server
 *                  https://www.npmjs.com/package/@azure/storage-file-share
 */
const { ShareServiceClient } = require("@azure/storage-file-share");
const fileUtility = require ('./../utils/fileUtility');

const connStr = "https://udfileuploader.file.core.windows.net?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2023-09-26T09:59:03Z&st=2021-09-26T01:59:03Z&sip=98.230.182.225&spr=https&sig=z2wjbu%2BlClJEpmGOT5R6NQx9zAICSNgo3B%2BTaMWz3R4%3D";

const accountName = 'udfileuploader';
const sasToken = '?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-10-12T08:40:05Z&st=2021-10-12T00:40:05Z&sip=0.0.0.0-255.255.255.255&spr=https&sig=54aJs%2FyVZkL0OCGsONZyB1emdjCDtgBaP0aG0YK9NUA%3D';
// both lines created by Zack
// const serviceClient = ShareServiceClient.fromConnectionString(connStr);
const shareName = 'udfileshare';

const createFileShare = async (name) => {

    const serviceClient = new ShareServiceClient(connStr);
    let shareIter = serviceClient.create();
    await shareClient.create();
}

const createNewDirectory = async (name) => {

    const serviceClient = new ShareServiceClient(connStr);
    const directoryClient = shareClient.getDirectoryClient(name);
    await directoryClient.create();
}

const createNewFile = async (name, directory, fileContent) => {
    // const uploadLimit = 4 * 4 * 1024;
    //

    console.log()
    const serviceClient = new ShareServiceClient(
        `https://${accountName}.file.core.windows.net${sasToken}`
    );
    const directoryClient = serviceClient.getShareClient(shareName).getDirectoryClient(directory);
    const fileClient = directoryClient.getFileClient(name);

    console.log(fileContent);
    await fileClient.create(fileContent.size);
    await fileClient.uploadRange(fileContent, 0, fileContent.size);
}


const getFilesFromDirectory = async (shareName, directoryName) => {

    const serviceClient = new ShareServiceClient(connStr);
    const directoryClient = serviceClient.getShareClient(shareName).getDirectoryClient(directoryName);
    let dirIter = await directoryClient.listFilesAndDirectories();

    let returnFiles = [];
    let i = 1;
    console.log(dirIter);
    for await (const item of dirIter) {
        if (item.kind === "directory") {
            console.log(`${i} - directory\t: ${item.name}`);
        } else {
            console.log(`${i} - file\t: ${item.name}`);
            returnFiles.push(item.stringify());
        }
        i++;
    }
    return returnFiles;

}

module.exports = {
    getFilesFromDirectory,
    createNewFile
}
