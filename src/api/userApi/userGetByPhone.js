const { getPhoneUser } = require("../../controllers/userControllers/getPhoneUser");
const router = require("express").Router();


// 電話番号によってユーザーを取得するAPI

router.get("/:phoneNumber",
    getPhoneUser,
    (req, res) => {
        return res.status(200).json(req.phoneUser);
    }
)


module.exports = router;