const router = require("express").Router();
const getUserApi = require("../api/userApi/getUserApi");


// APIルーティング

router.use("/get", getUserApi);


module.exports = router;