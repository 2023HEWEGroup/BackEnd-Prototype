const { imageUpload } = require("../../utils/commonUtils/imageUpload");
const { returnGroupHeaderName } = require("../../utils/groupUtils/returnGroupHeaderName");
const router = require("express").Router();


// グループ追加の際のヘッダー画像アップロードAPI

router.post("/",
    imageUpload(process.env.GROUP_HEADER_UPLOAD_PATH).single("groupHeader"),
    returnGroupHeaderName,
    (req, res) => {
        return res.status(200).json(req.fileName);
    }
)


module.exports = router;