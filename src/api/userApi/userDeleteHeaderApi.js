const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { userDeleteHeaderHandler } = require("../../handlers/userHandlers/userDeleteHeaderHandler");
const router = require("express").Router();


// ユーザーヘッダー削除API

router.delete("/:userId",
    getParamsUser,
    userDeleteHeaderHandler,
    (req, res) => {
        return res.status(200).json("ヘッダー画像を削除しました");
    }
)


module.exports = router;