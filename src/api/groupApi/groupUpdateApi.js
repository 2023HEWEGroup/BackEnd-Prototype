const { getParamsGroup } = require("../../controllers/groupControllers/getParamsGroup");
const { groupUpdateHandler } = require("../../handlers/groupHandlers/groupUpdateHandler");
const router = require("express").Router();


// グループプロフィール更新API

router.put("/:groupId",
    getParamsGroup,
    groupUpdateHandler,
    (req, res) => {
        return res.status(200).json("グループプロフィールを更新しました");
    }
)


module.exports = router;