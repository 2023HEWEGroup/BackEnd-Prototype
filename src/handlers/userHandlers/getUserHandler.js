// ユーザー取得処理

const getUserHandler = async (req, res) => {
    try {
        return res.status(200).json(req.paramsUser);
    } catch (err) {
        return res.status(500).json(err);
    }
}


module.exports = { getUserHandler }