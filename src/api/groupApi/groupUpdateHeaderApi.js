const { imageUpload } = require("../../utils/commonUtils/imageUpload");
const { getParamsGroup } = require("../../controllers/groupControllers/getParamsGroup");
const { groupUpdateHeaderHandler } = require("../../handlers/groupHandlers/groupUpdateHeaderHandler");
const router = require("express").Router();


// グループヘッダー更新API

router.put("/:groupId",
    getParamsGroup,
    imageUpload(process.env.GROUP_HEADER_UPLOAD_PATH).single("groupHeader"),
    groupUpdateHeaderHandler,
    (req, res) => {
        return res.status(200).json("アイコン画像をアップロードしました");
    }
)


module.exports = router;