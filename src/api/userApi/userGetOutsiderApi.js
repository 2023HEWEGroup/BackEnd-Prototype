const { getOutsider } = require("../../controllers/userControllers/getOutSider");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const router = require("express").Router();

// ログイン中のユーザーのうち、フォローしていないユーザーをランダムに取得するAPI(フォロー推奨表示)

router.get("/:_id",
    getParamsUser,
    getOutsider,
    (req, res) => {
        return res.status(200).json(req.users);
    }
)


module.exports = router;