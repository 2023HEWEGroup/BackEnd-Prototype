// パラメータのユーザーがボディのユーザーにブロックされていた場合returnさせる関数

exports.isUserBlocked = (req, res, next) => {
    try {
        if (req.paramsUser.blockUsers.includes(req.bodyUser._id)) {
            return res.status(403).json("ブロックされています");
        }
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
};