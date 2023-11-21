const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { imageUpload } = require("../../utils/commonUtils/imageUpload");
const { userUploadIconHandler } = require("../../handlers/userHandlers/userUploadIconHandler");
const router = require("express").Router();


// ユーザーアイコンアップロードAPI

router.put("/:_id",
    getParamsUser,
    imageUpload(process.env.USER_ICON_UPLOAD_PATH).single("userIcon"),
    userUploadIconHandler,
    (req, res) => {
        return res.status(200).json("アイコン画像をアップロードしました");
    }
)


module.exports = router;