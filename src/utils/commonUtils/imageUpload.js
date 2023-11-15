const multer = require("multer");


// 画像をアップロードする関数 (引数でパスを指定)

exports.imageUpload = (uploadPath) => {
    try {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, uploadPath);
            },
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9) + "-" + Math.round(Math.random() * 1e9);
                const fileName = file.fieldname + "-" + uniqueSuffix + ".png";
                req.fileName = fileName;
                cb(null, fileName);
            }
        })
        return multer({storage: storage});
    } catch (err) {
        return res.status(500).json(err);
    }
}