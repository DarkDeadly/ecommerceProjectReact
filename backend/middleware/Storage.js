const Multer = require("multer")

const storage = Multer.diskStorage({
    filename : (req , file , cb) => {
        cb(null , Date.now() + "-" + file.originalname);
    }
})

const upload = Multer({storage})


module.exports = upload;