const router = require("express").Router();
const registerApi = require("../api/authApi/registerApi");
const loginApi = require("../api/authApi/loginApi");


// APIルーティング

router.use("/register", registerApi);
router.use("/login", loginApi);


module.exports = router;