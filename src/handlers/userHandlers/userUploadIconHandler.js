const path = require("path");
const {promises: fsPromises, constants} = require("fs");


// ユーザーアイコンアップロード処理
// MongoDBはないものを追加しようとするとそのオブジェクトが消えてしまうらしい(undefinedを追加しようとしたiconが消えたので別途対策すべし)
// またミドルウェアでユーザーが存在するかを先に走査し、しなければ無駄な画像が保存されないように実行しない。
exports.userUploadIconHandler = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        const filePath = path.join(process.env.USER_ICON_UPLOAD_PATH, user.icon);
        // user.iconがnullだとfileExistsがtrue(空なのにパスがある判定)になってしまうので、ないものをフォルダから駆逐しようとしてエラーになる。
        // 三項演算子でまずuser.iconがnullかどうかで分ける。
        const fileExists = user.icon ? await fsPromises.access(filePath, constants.F_OK)
            .then(() => true)
            .catch(() => false) : false;
        if (fileExists) {
            // user.iconのパスがフォルダにあれば、ファイルを削除。
            await fsPromises.unlink(filePath);
        }
        user.icon = req.fileName;
        await user.save();
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}