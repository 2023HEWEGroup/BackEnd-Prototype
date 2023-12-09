const router = require("express").Router();
const settingUserIdApi = require("../api/settingApi/settingUserIdApi");
const settingPhoneNumberApi =require("../api/settingApi/settingPhoneNumberApi");
const settingThemeApi = require("../api/settingApi/settingThemeApi");


// APIルーティング

router.use("/userId", settingUserIdApi);
router.use("/phoneNumber", settingPhoneNumberApi);
router.use("/theme", settingThemeApi);


module.exports = router;