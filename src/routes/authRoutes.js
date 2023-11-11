const router = require("express").Router();
const authRegisterApi = require("../api/authApi/authRegisterApi");
const authLoginApi = require("../api/authApi/authLoginApi");
const authLoginByEmailApi = require("../api/authApi/authLoginByEmail");
const authVerifyUserApi = require("../api/authApi/authVerifyUserApi");
const authExchangeEmailApi = require("../api/authApi/authExchangeEmailApi");


// APIルーティング

router.use("/register", authRegisterApi);
router.use("/login", authLoginApi);
router.use("/loginByEmail", authLoginByEmailApi);
router.use("/verify", authVerifyUserApi);
router.use("/exchangeEmail", authExchangeEmailApi);


module.exports = router;