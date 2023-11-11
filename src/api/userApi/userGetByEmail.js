const { getParamsEailUser } = require("../../controllers/userControllers/getaParamsEailUser");
const router = require("express").Router();


// メールアドレスによってユーザーを取得するAPI

router.get("/:email",
    getParamsEailUser,
    (req, res) => {
        return res.status(200).json(req.emailUser);
    }
)


module.exports = router;