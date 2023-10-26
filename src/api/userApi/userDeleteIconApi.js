const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { userDeleteIconHandler } = require("../../handlers/userHandlers/userDeleteIconHandler");
const router = require("express").Router();


// ユーザーアイコン削除API

router.delete("/:userId",
    getParamsUser,
    userDeleteIconHandler,
    (req, res) => {
        return res.status(200).json("アイコン画像を削除しました");
    }
)


module.exports = router;