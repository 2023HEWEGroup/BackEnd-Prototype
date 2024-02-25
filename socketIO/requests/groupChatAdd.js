const Group = require("../../src/models/groups");

// グループにチャットを追加する処理

const groupChatAdd = (io) => (socket) => async (chat, groupId, currentUser) => {
    try {
        const group = await Group.findById(groupId);
        if (!group) console.log(err);
        await group.updateOne({
            $push: {
                chat: {
                    _id: currentUser._id,
                    chat: chat,
                }
            }
        })
        // 更新後のグループ情報を取得
        const updatedGroup = await Group.findById(groupId)
        .populate('owner', ['username']);
        // グループルームのクライアントに更新されたグループ情報を送信
        io.to(`group_${groupId}`).emit(`newGroup`, updatedGroup);
    } catch (err) {
        console.log(err);
    }
};

module.exports = { groupChatAdd };