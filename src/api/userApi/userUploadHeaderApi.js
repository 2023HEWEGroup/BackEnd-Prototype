const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { imageUpload } = require("../../utils/commonUtils/imageUpload");
const { userUploadHeaderHandler } = require("../../handlers/userHandlers/userUploadHeaderHandler");
const router = require("express").Router();


// ユーザーヘッダーアップロードAPI

router.put("/:_id",
    getParamsUser,
    imageUpload(process.env.USER_HEADER_UPLOAD_PATH).single("userHeader"),
    userUploadHeaderHandler,
    (req, res) => {
        return res.status(200).json("ヘッダー画像をアップロードしました");
    }
)


module.exports = router;