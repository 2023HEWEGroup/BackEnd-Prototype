const path = require("path");
const {promises: fsPromises, constants} = require("fs");


// グループヘッダー削除処理

exports.groupDeleteHeaderHandler = async (req, res, next) => {
    try {
        const group = req.paramsGroup;
        const filePath = path.join(process.env.GROUP_HEADER_UPLOAD_PATH, group.header);
        const fileExists = group.header ? await fsPromises.access(filePath, constants.F_OK)
                .then(() => true)
                .catch(() => false) : false;
        if (fileExists) {
            await fsPromises.unlink(filePath);
        }
        group.header = "";
        await group.save();
        next();
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}