const path = require("path");
const {promises: fsPromises, constants} = require("fs");


// ユーザーヘッダーアップデート処理

exports.userUploadHeaderHandler = async (req, res, next) => {
    try {
        if (req.file) {
            const user = req.paramsUser;
            const filePath = path.join(process.env.USER_HEADER_UPLOAD_PATH, user.header);
            const fileExists = user.header ? await fsPromises.access(filePath, constants.F_OK)
                .then(() => true)
                .catch(() => false) : false;
            if (fileExists) {
                await fsPromises.unlink(filePath);
            }
            user.header = req.fileName;
            await user.save();
            next();
        } else {
            return res.status(400).json("ファイルが送信されていません");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
}