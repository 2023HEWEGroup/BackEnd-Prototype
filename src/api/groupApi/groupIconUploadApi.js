const { imageUpload } = require("../../utils/commonUtils/imageUpload");
const { returnGroupIconName } = require("../../utils/groupUtils/returnGroupIconName");
const router = require("express").Router();


// グループ追加の際のアイコン画像アップロードAPI

router.post("/",
    imageUpload(process.env.GROUP_ICON_UPLOAD_PATH).single("groupIcon"),
    returnGroupIconName,
    (req, res) => {
        return res.status(200).json(req.fileName);
    }
)


module.exports = router;