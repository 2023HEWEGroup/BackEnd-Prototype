const { getBodyUser } = require("../../controllers/userControllers/getBodyUser");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { userBlockHandler } = require("../../handlers/userHandlers/userBlockHandler");
const router = require("express").Router();


// ユーザーブロックAPI

router.put("/:userId",
    getBodyUser,
    getParamsUser,
    userBlockHandler,
)


module.exports = router;