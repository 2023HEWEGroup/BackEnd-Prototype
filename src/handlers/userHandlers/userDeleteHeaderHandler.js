const path = require("path");
const {promises: fsPromises, constants} = require("fs");


// ユーザーヘッダー削除処理

exports.userDeleteHeaderHandler = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        const filePath = path.join(process.env.USER_HEADER_UPLOAD_PATH, user.header);
        const fileExists = user.header ? await fsPromises.access(filePath, constants.F_OK)
                .then(() => true)
                .catch(() => false) : false;
        if (fileExists) {
            await fsPromises.unlink(filePath);
        }
        user.header = "";
        await user.save();
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}