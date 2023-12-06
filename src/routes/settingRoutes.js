const router = require("express").Router();
const settingUserIdApi = require("../api/settingApi/settingUserIdApi");
const settingPhoneNumberApi =require("../api/settingApi/settingPhoneNumberApi");


// APIルーティング

router.use("/userId", settingUserIdApi);
router.use("/phoneNumber", settingPhoneNumberApi);


module.exports = router;