const Product = require("../../models/products");


// 対象ユーザーのいいねしている商品を取得するミドルウェア (ページネーション対応)

exports.getUserLikeProduct = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        const { page, pageSize } = req.query;
        const userProducts = await Product.find({ likes: {$in: user._id.toString()} })
        .sort({ createdAt: -1 })
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize));
        req.userProducts = userProducts;
        // ユーザーのいいねした商品に対応するインデックスの降順に並び替える
        userProducts.sort((a, b) => {
            const indexA = user.likes.indexOf(a._id.toString());
            const indexB = user.likes.indexOf(b._id.toString());
            return indexB - indexA;
        });

        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}