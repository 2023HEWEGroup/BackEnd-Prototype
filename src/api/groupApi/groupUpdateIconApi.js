const { imageUpload } = require("../../utils/commonUtils/imageUpload");
const { getParamsGroup } = require("../../controllers/groupControllers/getParamsGroup");
const { groupUpdateIconHandler } = require("../../handlers/groupHandlers/groupUpdateIconHandler");
const router = require("express").Router();


// グループアイコン更新API

router.put("/:groupId",
    getParamsGroup,
    imageUpload(process.env.GROUP_ICON_UPLOAD_PATH).single("groupIcon"),
    groupUpdateIconHandler,
    (req, res) => {
        return res.status(200).json("アイコン画像をアップロードしました");
    }
)


module.exports = router;