// ユーザーのメールアドレス変更処理

exports.authExchangeEmailHandler = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        await user.updateOne({
            authToken: {
                hashedToken: req.hashedToken.toString(),
                createdAt: new Date(),
                unverifiedEmail: req.body.unverifiedEmail,
            },
        });
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}