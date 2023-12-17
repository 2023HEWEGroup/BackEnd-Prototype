const Product = require("../../models/products");


// 指定個数の商品を重複無しのランダムで取得するミドルウェア

exports.getRandomProduct = async (req, res, next) => {
    try {
        const { size } = req.query;
        const allProducts = await Product.find();

        // 商品が指定個数以下の場合は全商品を返す
        if (allProducts.length <= size) {
        return res.json(allProducts);
        }

        // 商品が指定個数より多い場合、ランダムに20個選択
        const selectedProducts = [];
        const selectedIndices = new Set();

        while (selectedIndices.size < 20) {
        const randomIndex = Math.floor(Math.random() * allProducts.length);
        if (!selectedIndices.has(randomIndex)) {
            selectedIndices.add(randomIndex);
            selectedProducts.push(allProducts[randomIndex]);
        }
    }
        req.products = selectedProducts;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}