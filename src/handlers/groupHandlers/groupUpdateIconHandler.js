const path = require("path");
const {promises: fsPromises, constants} = require("fs");


// グループアイコン更新処理
// MongoDBはないものを追加しようとするとそのオブジェクトが消えてしまうらしい(undefinedを追加しようとしたiconが消えたので別途対策すべし)
// またミドルウェアでユーザーが存在するかを先に走査し、しなければ無駄な画像が保存されないように実行しない。
exports.groupUpdateIconHandler = async (req, res, next) => {
    try {
        const group = req.paramsGroup;
        const filePath = path.join(process.env.GROUP_ICON_UPLOAD_PATH, group.icon);
        // user.iconがnullだとfileExistsがtrue(空なのにパスがある判定)になってしまうので、ないものをフォルダから駆逐しようとしてエラーになる。
        // 三項演算子でまずuser.iconがnullかどうかで分ける。
        const fileExists = group.icon ? await fsPromises.access(filePath, constants.F_OK)
            .then(() => true)
            .catch(() => false) : false;
        if (fileExists) {
            // user.iconのパスがフォルダにあれば、ファイルを削除。
            await fsPromises.unlink(filePath);
        }
        group.icon = req.fileName;
        await group.save();
        next();
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}