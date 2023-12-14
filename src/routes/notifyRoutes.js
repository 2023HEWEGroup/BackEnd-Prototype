const router = require("express").Router();
const notifyWelcomeApi = require("../api/notifyApi/notifyWelcomeApi");
const notifyGetApi = require("../api/notifyApi/notifyGetApi");
const notifyUnreadCountApi = require("../api/notifyApi/notifyCountUnreadApi");

// APIルーティング

router.use("/welcome", notifyWelcomeApi);
router.use("/get", notifyGetApi);
router.use("/getUnread", notifyUnreadCountApi);


module.exports = router;