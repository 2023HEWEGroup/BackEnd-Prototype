const router = require("express").Router();
const { getBodyUser } = require("../../controllers/userControllers/getBodyUser");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { isUserBlocked } = require("../../utils/userUtils/isUserBlocked");
const { getUserHandler } = require("../../handlers/userHandlers/getUserHandler");


// ユーザー取得API

router.get("/:userId",
    getBodyUser,
    getParamsUser,
    isUserBlocked,
    getUserHandler
)


module.exports = router;