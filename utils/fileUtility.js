exports.toBase64 = fileData => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

// export.parseFile = (file) => {
//
// }
