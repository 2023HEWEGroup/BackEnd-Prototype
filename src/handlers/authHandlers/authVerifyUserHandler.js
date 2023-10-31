const CryptoJS = require("crypto-js");


// ユーザーの二段階認証処理

exports.authverifyUserHandler = async (req, res, next) => {
    try {
        // トークンの認証
        const user = req.paramsUser;
        const token = req.body.token;
        const decryptedToken = CryptoJS.AES.decrypt(user.authToken.hashedToken, process.env.AUTH_TOKEN_HASH_KEY).toString(CryptoJS.enc.Utf8);
        if (token !== decryptedToken) {
            return res.status(401).json("認証トークンが無効です");
        };

        // トークンの有効期限検証(30分)
        const createdAt = user.authToken.createdAt;
        const timeDiff = new Date() - createdAt;
        if (timeDiff > 30 * 60 * 1000) {
            return res.status(401).json("トークンが有効期限切れです");
        }

        // ユーザーの認証
        await user.updateOne({
            email: user.authToken.unverifiedEmail,
            authToken: {
                hashedToken: "",
                createdAt: null,
                unverifiedEmail: ""
            },
            isAuthorized: true,
        });
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}