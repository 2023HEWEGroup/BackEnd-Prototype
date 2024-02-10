// グループアイコン名を返す関数

exports.returnGroupIconName = async (req, res, next) => {
    try {
        req.filename = req.file.filename;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}