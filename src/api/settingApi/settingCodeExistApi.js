const { getIsCodeexistence } = require("../../controllers/settingControllers/getIsCodeExistence");
const router = require("express").Router();


// 入力されたコードに対応するポイントが存在するか検証するAPI

router.post("/",
    getIsCodeexistence,
    (req, res) => {
        return res.status(200).json(req.point);
    }
)


module.exports = router;