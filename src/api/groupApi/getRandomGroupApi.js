const { getRandomGroup } = require("../../controllers/groupControllers/getRandomGroup");
const router = require("express").Router();


// グループをランダムに指定個数取得するAPI(グループアプローチ表示)

router.get("/",
    getRandomGroup,
    (req, res) => {
        return res.status(200).json(req.randomGroup);
    }
)


module.exports = router;