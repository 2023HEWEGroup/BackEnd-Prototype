const { getFavoriteGroup } = require("../../controllers/groupControllers/getFavoriteGroup");
const router = require("express").Router();

// グループを人気順にページネーション対応で取得するAPI

router.get("/",
    getFavoriteGroup,
    (req, res) => {
        return res.status(200).json(req.groups);
    }
)


module.exports = router;