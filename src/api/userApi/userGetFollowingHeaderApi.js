const { getFollowingHeaderUsers } = require("../../controllers/userControllers/getFollowingHeaderUser");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const router = require("express").Router();

// あるユーザーのフォローを指定件数、総数と共に取得するAPI (/followingのヘッダー表示用)

router.get("/:_id",
    getParamsUser,
    getFollowingHeaderUsers,
    (req, res) => {
        return res.status(200).json({users: req.users, num: req.num});
    }
)


module.exports = router;