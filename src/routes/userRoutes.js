const router = require("express").Router();
const userGetApi = require("../api/userApi/userGetApi");
const userUpdateApi = require("../api/userApi/userUpdateApi");
const userUploadIconApi = require("../api/userApi/userUploadIconApi");
const userDeleteIconApi = require("../api/userApi/userDeleteIconApi");
const userUploadHeaderApi = require("../api/userApi/userUploadHeaderApi");
const userDeleteHeaderApi = require("../api/userApi/userDeleteHeaderApi");
const userFollowApi = require("../api/userApi/userFollowApi");
const userBlockApi = require("../api/userApi/userBlockApi");


// APIルーティング

router.use("/get", userGetApi);
router.use("/update", userUpdateApi);
router.use("/uploadIcon", userUploadIconApi);
router.use("/deleteIcon", userDeleteIconApi);
router.use("/uploadHeader", userUploadHeaderApi);
router.use("/deleteHeader", userDeleteHeaderApi);
router.use("/follow", userFollowApi);
router.use("/block", userBlockApi);


module.exports = router;