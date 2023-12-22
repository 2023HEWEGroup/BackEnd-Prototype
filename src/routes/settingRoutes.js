const router = require("express").Router();
const settingUserIdApi = require("../api/settingApi/settingUserIdApi");
const settingPhoneNumberApi =require("../api/settingApi/settingPhoneNumberApi");
const settingThemeApi = require("../api/settingApi/settingThemeApi");
const settingCodeExistApi = require("../api/settingApi/settingCodeExistApi");
const settingChargeApi = require("../api/settingApi/settingChargeApi");
const settingCreditCardDeleteApi = require("../api/settingApi/settingCreditCardDeleteApi");
const settingCreditCardUpdateApi = require("../api/settingApi/settingCreditCardUpdateApi");


// APIルーティング

router.use("/userId", settingUserIdApi);
router.use("/phoneNumber", settingPhoneNumberApi);
router.use("/theme", settingThemeApi);
router.use("/codeExist", settingCodeExistApi);
router.use("/charge", settingChargeApi);
router.use("/creditCardDelete", settingCreditCardDeleteApi);
router.use("/creditCardUpdate", settingCreditCardUpdateApi);


module.exports = router;