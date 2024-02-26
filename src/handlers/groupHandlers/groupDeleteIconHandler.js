const path = require("path");
const {promises: fsPromises, constants} = require("fs");


// グループアイコン削除処理

exports.groupDeleteIconHandler = async (req, res, next) => {
    try {
        const group = req.paramsGroup;
        const filePath = path.join(process.env.GROUP_ICON_UPLOAD_PATH, group.icon);
        const fileExists = group.icon ? await fsPromises.access(filePath, constants.F_OK)
                .then(() => true)
                .catch(() => false) : false;
        if (fileExists) {
            await fsPromises.unlink(filePath);
        }
        group.icon = "";
        await group.save();
        next();
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
}