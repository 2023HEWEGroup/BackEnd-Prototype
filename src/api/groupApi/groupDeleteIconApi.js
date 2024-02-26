const { getParamsGroup } = require("../../controllers/groupControllers/getParamsGroup");
const { groupDeleteIconHandler } = require("../../handlers/groupHandlers/groupDeleteIconHandler");
const router = require("express").Router();


// グループアイコン削除API

router.delete("/:groupId",
    getParamsGroup,
    groupDeleteIconHandler,
    (req, res) => {
        return res.status(200).json("アイコン画像を削除しました");
    }
)


module.exports = router;