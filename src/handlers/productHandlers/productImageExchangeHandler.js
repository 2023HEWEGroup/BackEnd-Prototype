const path = require("path");
const {promises: fsPromises} = require("fs");


// 商品画像交換処理

exports.productImageExchangeHandler = async (req, res, next) => {
    try {
        if (req.files) {
            const product = req.paramsProduct;
            const fileNames = req.files.map(file => file.filename);
            const deleteFilePaths = product.productImg.map(fileName => {
                return path.join(process.env.PRODUCT_IMAGE_UPLOAD_PATH, fileName);
            })
            for (const deleteFilePath of deleteFilePaths) {
                await fsPromises.unlink(deleteFilePath);
            }
            await product.updateOne({
                $set: {
                    productImg: fileNames
                }
                })
            next();
        } else {
            return res.status(400),json("ファイルが送信されていません");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
}