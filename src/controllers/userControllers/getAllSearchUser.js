const User = require("../../models/users");


// 検索ワードに合致するユーザーをページネーション対応で取得する関数

exports.getAllSearchUser = async (req, res, next) => {
    try {
        const { searchWord, page, pageSize, mode } = req.query;
        const user = req.paramsUser;

        let query = { $or: [{username: {$regex: searchWord, $options: 'i'}}, {userId: {$regex: searchWord, $options: 'i'}}]};

        console.log(mode)
        if (mode == "following") query = {...query, _id: {$in: req.paramsUser.followings}};
        else if (mode == "follower") query = {...query, _id: {$in: req.paramsUser.followers}};
        else if (mode === "authorized") query = {...query, isAuthorized: true};
        else if (mode == "following&follower") query = {...query, _id: { $all: [req.paramsUser.followers, req.paramsUser.followings]}};
        else if (mode === "following&authorized") query = {...query, _id: {$in: req.paramsUser.followings}, isAuthorized: true};
        else if (mode === "follower&authorized") query = {...query, _id: {$in: req.paramsUser.followers}, isAuthorized: true};

        const num = await User.countDocuments(query);
        const users = await User.find(query)
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize));
        req.num = num;
        req.users = users;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}