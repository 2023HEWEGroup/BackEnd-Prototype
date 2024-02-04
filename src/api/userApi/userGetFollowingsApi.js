const { getFollowingUsers } = require("../../controllers/userControllers/getFollowingUsers");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const router = require("express").Router();

// あるユーザーのフォロ一覧を指定件数ずつ取得するAPI

router.get("/:_id",
    getParamsUser,
    getFollowingUsers,
    (req, res) => {
        return res.status(200).json(req.users);
    }
)


module.exports = router;