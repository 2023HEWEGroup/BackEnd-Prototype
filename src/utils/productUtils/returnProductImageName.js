// 商品画像名を返す関数

exports.returnProductImageName = async (req, res, next) => {
    try {
        // 保存された商品画像の生成された画像名を配列で取得。
        req.fileNames = req.files.map(file => file.filename);
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}