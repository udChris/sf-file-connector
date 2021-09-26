/**
 * @author: Chris Gibson
 * @description: this class represents the azure SDK and connection code layer for the sf-file-connector server
 *                  https://www.npmjs.com/package/@azure/storage-file-share
 */
const { ShareServiceClient } = require("@azure/storage-file-share");

const connStr = "https://udfileuploader.file.core.windows.net/?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2023-09-26T09:59:03Z&st=2021-09-26T01:59:03Z&sip=98.230.182.225&spr=https&sig=z2wjbu%2BlClJEpmGOT5R6NQx9zAICSNgo3B%2BTaMWz3R4%3D";


const createFileShare = async (name) => {

    const serviceClient = new ShareServiceClient(connStr);
    let shareIter = serviceClient.create();
    await shareClient.create();
    console.log(`Create share ${shareName} successfully`);

}

const createNewDirectory = async (name) => {

    const serviceClient = new ShareServiceClient(connStr);
    const directoryClient = shareClient.getDirectoryClient(name);
    await directoryClient.create();
    console.log(`Create directory ${directoryName} successfully`);
}

const createNewDirectory = async (name) => {

    const serviceClient = new ShareServiceClient(connStr);
    const directoryClient = shareClient.getDirectoryClient(name);
    await directoryClient.create();
    console.log(`Create directory ${directoryName} successfully`);
}
