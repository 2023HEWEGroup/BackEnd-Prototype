const { getParamsGroup } = require("../../controllers/groupControllers/getParamsGroup");
const { getBodyUser } = require("../../controllers/userControllers/getBodyUser");
const { groupJoinHandler } = require("../../handlers/groupHandlers/groupJoinHandler");
const router = require("express").Router();


// グループ参加もしくは離脱API

router.put("/:groupId",
    getParamsGroup,
    getBodyUser,
    groupJoinHandler,
    getParamsGroup,
    (req, res) => {
        return res.status(200).json(req.paramsGroup);
    }
)


module.exports = router;