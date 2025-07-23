let ImageKit = require("imagekit");

let imagekit = new ImageKit({
    publicKey : process.env.PUBLIC_KEY,
    privateKey : process.env.PRIVATE_KEY,
    urlEndpoint : process.env.iMAGE_URL
});

module.exports = imagekit;