// ユーザーのメール再送処理

exports.authResendMailHandler = async (req, res, next) => {
    try {
        const user = req.paramsUser;
        await user.updateOne({
            authToken: {
                hashedToken: req.hashedToken.toString(),
                createdAt: new Date(),
                unverifiedEmail: user.authToken.unverifiedEmail,
            },
        });
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}