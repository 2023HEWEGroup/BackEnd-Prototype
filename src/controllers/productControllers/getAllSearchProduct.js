const Product = require("../../models/products");


// 検索ワードに合致する商品をページネーション対応で取得する関数

exports.getAllSearchProduct = async (req, res, next) => {
    try {
        const { searchWord, page, pageSize, status, category, sort } = req.query;

        let query = {productName: {$regex: searchWord, $options: 'i'}};
        query = category === "すべての商品" ? query : { ...query, category: category };
        // statusが"onSale"の場合、追加の条件を付け加える
        if (status === "onSale") {
            query = {
                ...query,
                $and: [
                    { purchasingId: null },
                    { isSold: false }
                ]
            };
            // statusが"soldOut"の場合、追加の条件を付け加える
        } else if (status === "soldOut") {
            query = {
                ...query,
                $or: [
                    { purchasingId: { $ne: null } },
                    { isSold: true }
                ]
            };
        }
        const num = await Product.countDocuments(query);
        const products = await Product.find(query)
        .sort({ createdAt: sort === "asc" ? 1 : -1 }) // ソート条件
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