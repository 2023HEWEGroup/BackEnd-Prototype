const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const { authverifyUserHandler } = require("../../handlers/authHandlers/authVerifyUserHandler");
const router = require("express").Router();


// 二段階認証API

router.post("/:userId", 
    getParamsUser,
    authverifyUserHandler,
    (req, res) => {
        return res.status(200).json("二段階認証が完了しました");
    }
)


module.exports = router;