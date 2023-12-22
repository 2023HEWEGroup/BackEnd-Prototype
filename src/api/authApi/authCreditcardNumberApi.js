const { getCardNumber } = require("../../controllers/userControllers/getCreditCardNumber");
const { getParamsUser } = require("../../controllers/userControllers/getParamsUser");
const router = require("express").Router();


// クレジットカード番号を一部伏せて返すAPI

router.get("/:_id", 
    getParamsUser,
    getCardNumber,
    (req, res) => {
        return res.status(200).json(req.number);
    }
)


module.exports = router;