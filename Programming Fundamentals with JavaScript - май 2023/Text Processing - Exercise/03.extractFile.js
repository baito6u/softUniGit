function extractFile(path) {

    let lastSlashIndex = path.lastIndexOf('\\');
    let lastPointIndex = path.lastIndexOf('.');

    let fileName = path.substring(lastSlashIndex + 1, lastPointIndex);
    let extensionName = path.substring(lastPointIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extensionName}`);

}

extractFile('C:\\Internal\\training-internal\\Template.pptx');