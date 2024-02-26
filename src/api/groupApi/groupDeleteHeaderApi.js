const { getParamsGroup } = require("../../controllers/groupControllers/getParamsGroup");
const { groupDeleteHeaderHandler } = require("../../handlers/groupHandlers/groupDeleteHeaderHandler");
const router = require("express").Router();


// グループヘッダー削除API

router.delete("/:groupId",
    getParamsGroup,
    groupDeleteHeaderHandler,
    (req, res) => {
        return res.status(200).json("アイコン画像を削除しました");
    }
)


module.exports = router;