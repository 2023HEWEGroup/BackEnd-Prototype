const { getParamsGroup } = require("../../controllers/groupControllers/getParamsGroup");
const router = require("express").Router();


// グループ取得API

router.get("/:groupId",
    getParamsGroup,
    (req, res) => {
        return res.status(200).json(req.paramsGroup);
    }
)


module.exports = router;