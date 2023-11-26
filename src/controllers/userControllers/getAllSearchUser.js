const User = require("../../models/users");


// 検索ワードに合致するユーザーをページネーション対応で取得する関数

exports.getAllSearchUser = async (req, res, next) => {
    try {
        const { searchWord, page, pageSize } = req.query;
        const num = await User.countDocuments({ $or: [{username: {$regex: searchWord, $options: 'i'}}, {userId: {$regex: searchWord, $options: 'i'}}]});
        const users = await User.find({ $or: [{username: {$regex: searchWord, $options: 'i'}}, {userId: {$regex: searchWord, $options: 'i'}}]})
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize));
        req.num = num;
        req.users = users;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}