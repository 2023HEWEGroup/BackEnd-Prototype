const { getBodyUser } = require("../../controllers/userControllers/getBodyUser");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { userFollowHandler } = require("../../handlers/userHandlers/userFollowHandler");
const router = require("express").Router();


// ユーザーフォローAPI

router.put("/:userId",
    getBodyUser,
    getParamsUser,
    userFollowHandler,
)


module.exports = router;