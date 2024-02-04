const Product = require("../../models/products");


// フォロー中の商品をページネーション対応で取得するミドルウェア

exports.getFollowingProduct = async (req, res, next) => {
    try {
        const { page, pageSize } = req.query;
        const user = req.paramsUser;
        const products = await Product.find({sellerId: {$in: user.followings}})
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize))
        .sort({ createdAt: -1 })
        .populate('sellerId', ['userId', 'username', 'userId', 'icon', 'defaultIcon', '_id']);
        req.products = products;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}