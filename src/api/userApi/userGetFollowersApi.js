const { getFollowerUsers } = require("../../controllers/userControllers/getFollowerUsers");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const router = require("express").Router();

// あるユーザーのフォロワー一覧を指定件数ずつ取得するAPI

router.get("/:_id",
    getParamsUser,
    getFollowerUsers,
    (req, res) => {
        return res.status(200).json(req.users);
    }
)


module.exports = router;