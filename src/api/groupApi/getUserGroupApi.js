const { getUserGroups } = require("../../controllers/groupControllers/getUserGroup");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const router = require("express").Router();


// あるユーザーの所属するグループ取得API

router.get("/:_id",
    getParamsUser,
    getUserGroups,
    (req, res) => {
        return res.status(200).json(req.userGroups);
    }
)


module.exports = router;