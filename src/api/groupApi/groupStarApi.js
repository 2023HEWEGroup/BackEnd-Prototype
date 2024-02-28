const { getParamsGroup } = require("../../controllers/groupControllers/getParamsGroup");
const { getBodyUser } = require("../../controllers/userControllers/getBodyUser");
const { groupJoinHandler } = require("../../handlers/groupHandlers/groupJoinHandler");
const { groupStarHandler } = require("../../handlers/groupHandlers/groupStarHandler");
const router = require("express").Router();


// グループお気に入りもしくはお気に入り解除API

router.put("/:groupId",
    getParamsGroup,
    getBodyUser,
    groupStarHandler,
    getParamsGroup,
    (req, res) => {
        return res.status(200).json(req.paramsGroup);
    }
)


module.exports = router;