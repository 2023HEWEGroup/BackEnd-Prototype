// ユーザーフォロー処理

exports.userFollowHandler = async (req, res) => {
    try {
        const user = req.paramsUser;
        const currentUser = req.bodyUser;
        if (!user.followers.includes(currentUser._id)) {
            await user.updateOne({
                $push: {
                    followers: currentUser._id.toString()
                }
            })
            await currentUser.updateOne({
                $push: {
                    followings: user._id.toString()
                }
            })
            return res.status(200).json("フォローが完了しました");
        } else {
            await user.updateOne({
                $pull: {
                    followers: currentUser._id.toString()
                }
            })
            await currentUser.updateOne({
                $pull: {
                    followings: user._id.toString()
                }
            })
            return res.status(200).json("フォロー解除が完了しました");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
}