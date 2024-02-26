const path = require("path");
const {promises: fsPromises, constants} = require("fs");


// グループヘッダー更新処理
// MongoDBはないものを追加しようとするとそのオブジェクトが消えてしまうらしい(undefinedを追加しようとしたiconが消えたので別途対策すべし)
// またミドルウェアでユーザーが存在するかを先に走査し、しなければ無駄な画像が保存されないように実行しない。
exports.groupUpdateHeaderHandler = async (req, res, next) => {
    try {
        const group = req.paramsGroup;
        const filePath = path.join(process.env.GROUP_HEADER_UPLOAD_PATH, group.header);
        // user.iconがnullだとfileExistsがtrue(空なのにパスがある判定)になってしまうので、ないものをフォルダから駆逐しようとしてエラーになる。
        // 三項演算子でまずuser.iconがnullかどうかで分ける。
        const fileExists = group.header ? await fsPromises.access(filePath, constants.F_OK)
            .then(() => true)
            .catch(() => false) : false;
        if (fileExists) {
            // user.iconのパスがフォルダにあれば、ファイルを削除。
            await fsPromises.unlink(filePath);
        }
        group.header = req.fileName;
        await group.save();
        next();
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}