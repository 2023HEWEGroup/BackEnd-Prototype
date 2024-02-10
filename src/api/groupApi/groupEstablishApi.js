const { getBodyUser } = require("../../controllers/userControllers/getBodyUser");
const { groupEstablishHandler } = require("../../handlers/groupHandlers/groupEstablishHandler");
const router = require("express").Router();


// グループ追加API

router.post("/",
    getBodyUser,
    groupEstablishHandler,
    (req, res) => {
        return res.status(200).json(req.group);
    }
)


module.exports = router;