const { imageUpload } = require("../../utils/commonUtils/imageUpload");
const { returnProductImageName } = require("../../utils/productUtils/returnProductImageName");
const router = require("express").Router();


// 商品画像アップロードAPI

router.post("/",
    imageUpload(process.env.PRODUCT_IMAGE_UPLOAD_PATH).array("productImage", 4),
    returnProductImageName,
    (req, res) => {
        return res.status(200).json(req.fileNames);
    }
)


module.exports = router;