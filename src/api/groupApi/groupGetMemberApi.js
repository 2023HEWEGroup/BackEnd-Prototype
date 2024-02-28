const { getGroupMembers } = require("../../controllers/groupControllers/getGroupMembers");
const { getParamsGroup } = require("../../controllers/groupControllers/getParamsGroup");
const router = require("express").Router();


// グループメンバーフェッチAPI

router.get("/:groupId",
    getParamsGroup,
    getGroupMembers,
    (req, res) => {
        return res.status(200).json(req.members);
    }
)


module.exports = router;