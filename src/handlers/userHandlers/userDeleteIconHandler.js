const path = require("path");
const {promises: fsPromises, constants} = require("fs");


// ユーザーアイコン削除処理

exports.userDeleteIconHandler = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        const filePath = path.join(process.env.USER_ICON_UPLOAD_PATH, user.icon);
        const fileExists = user.icon ? await fsPromises.access(filePath, constants.F_OK)
                .then(() => true)
                .catch(() => false) : false;
        if (fileExists) {
            await fsPromises.unlink(filePath);
        }
        user.icon = "";
        await user.save();
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}