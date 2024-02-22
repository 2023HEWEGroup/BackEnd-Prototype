const Group = require("../../models/groups");


// グループをランダムに指定個数取得するミドルウェア(グループアプローチ表示)

exports.getRandomGroup = async (req, res, next) => {
    try {
        const { pageSize } = req.query;
        const randomGroup = await Group.aggregate([{ $sample: { size: Number(pageSize) } }]);
        req.randomGroup = randomGroup;
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}