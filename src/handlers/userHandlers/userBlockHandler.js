const Product = require("../../models/products");


// ユーザーブロック処理


exports.userBlockHandler = async (req, res) =>{
    try {
        const user = req.paramsUser;
        const currentUser = req.bodyUser;
        if(!currentUser.blockUsers.includes(user._id)) {
            await currentUser.updateOne({
                $push: {
                    blockUsers: user._id.toString()
                }
            })
            // 自分のフォロワーにいたら関係を削除
            if (currentUser.followers.includes(user._id)) {
                await currentUser.updateOne({
                    $pull: {
                        followers: user._id.toString()
                    }
                })
                await user.updateOne({
                    $pull: {
                        followings: currentUser._id.toString()
                    }
                })
            }
            // 自分がフォローしていた場合も関係を削除
            if (currentUser.followings.includes(user._id)) {
                await currentUser.updateOne({
                    $pull: {
                        followings: user._id.toString()
                    }
                })
                await user.updateOne({
                    $pull: {
                        followers: currentUser._id.toString()
                    }
                })
            }
            // ブロックしたユーザーがいいねしている全ての商品のIDを取得、文字列に変換。
            const userLikeProducts = user.likes.map(like => like.toString());
            // そのうち現在のユーザーが出品中の商品IDに含まれるものにフィルタリング
            const userDeleteProducts = userLikeProducts.filter(productId => currentUser.products.includes(productId));
            // ブロックしたユーザーのいいね欄から合致する商品IDをfor文で全て削除
            for (const userDeleteProductId of userDeleteProducts) {
                await user.updateOne({
                    $pull: {
                        likes: userDeleteProductId.toString()
                    }
                })
            }
            // ブロックしたユーザーがいいねしていた全ての自分の商品のいいね欄からブロックしたユーザーのIDを削除。
            await Product.updateMany({
                // 自分の商品に限定する
                _id: { $in: currentUser.products },
                likes: user._id.toString()
            },
            {
                $pull: {
                    likes: user._id.toString()
                }
            })
            //自分がいいねしている全ての商品のIDを取得、文字列に変換。
            const currentUserLikeProducts = currentUser.likes.map(like => like.toString());
            // そのうちブロックしたユーザーが出品中の商品IDに含まれるものにフィルタリング
            const currentUserDeleteProducts = currentUserLikeProducts.filter(productId => user.products.includes(productId));
            // 自分のいいね欄から合致する商品IDをfor文で全て削除
            for (const currentUserdeleteProductId of currentUserDeleteProducts) {
                await currentUser.updateOne({
                    $pull: {
                        likes: currentUserdeleteProductId.toString()
                    }
                })
            }
            // 自分がいいねしていた全てのブロックしたユーザーの商品のいいね欄から自分のIDを削除。
            await Product.updateMany({
                // ブロックしたユーザーの商品に限定する
                _id: { $in: user.products },
                likes: currentUser._id.toString()
            },
            {
                $pull: {
                    likes: currentUser._id.toString()
                }
            })
            return res.status(200).json("ブロックが完了しました");
        } else {
            await currentUser.updateOne({
                $pull: {
                    blockUsers: user._id.toString()
                }
            })
            return res.status(200).json("ブロック解除が完了しました");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
}