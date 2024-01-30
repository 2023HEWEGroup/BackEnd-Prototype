const Product = require("../../models/products");


// 検索ワードに合致する商品をページネーション対応で取得する関数

exports.getAllSearchProduct = async (req, res, next) => {
    try {
        const { searchWord, page, pageSize } = req.query;
        const num = await Product.countDocuments({productName: {$regex: searchWord, $options: 'i'}});
        const products = await Product.find({productName: {$regex: searchWord, $options: 'i'}})
        .sort({ createdAt: -1 })
        .skip((page - 1) * pageSize)
        .limit(Number(pageSize))
        .populate('sellerId', ['userId']);
        req.num = num;
        req.products = products;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}