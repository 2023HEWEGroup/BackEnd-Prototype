const { getAllSearchUser } = require("../../controllers/userControllers/getAllSearchUser");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const router = require("express").Router();

// 検索ワードに合致するユーザーをページネーション対応で取得するAPI (userIdとusername)

router.get("/:_id",
    getParamsUser,
    getAllSearchUser,
    (req, res) => {
        return res.status(200).json({users: req.users, num: req.num});
    }
)


module.exports = router;