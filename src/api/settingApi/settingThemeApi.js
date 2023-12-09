const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { userUpdateHandler } = require("../../handlers/userHandlers/userUpdateHandler");
const router = require("express").Router();


// テーマ更新API

router.put("/:_id",
    getParamsUser,
    userUpdateHandler,
    (req, res) => {
        return res.status(200).json("ユーザーIDを更新しました");
    }
)


module.exports = router;