// This function give the imageUrl format for the user given input of base64 code

const getMimeType = require("./getMimeType");

const imageOfBase64 = (base64String) => {
    const mimeType = getMimeType(base64String);
    const dataUrl = `data:${mimeType};base64,${base64String}`;
    console.log('data is of ', mimeType)
    return dataUrl

}

module.exports = imageOfBase64;

