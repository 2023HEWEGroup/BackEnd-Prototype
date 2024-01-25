const { getRandomUser } = require("../../controllers/userControllers/getRandomUser");
const router = require("express").Router();


// ユーザーをランダムに取得するAPI(非ログイン&&ユーザーアプローチ表示)

router.get("/",
    getRandomUser,
    (req, res) => {
        return res.status(200).json(req.users);
    }
)


module.exports = router;