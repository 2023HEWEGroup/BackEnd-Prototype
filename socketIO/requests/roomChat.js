const { groupBroadcasts } = require("../data/socketData");


// 配信ルームにチャットを反映させるミドルウェア

const roomChat = (io) => (socket) => (chat) => (groupId) => (roomId) => (userInfo) => {
    for (const groupId in groupBroadcasts) {
        if (groupBroadcasts.hasOwnProperty(groupId)) {
            const roomToUpdate = groupBroadcasts[groupId].find(room => room.roomId === roomId);
            if (roomToUpdate) {
                // 参加者のSocketIdも配列に追加 (切断時にSocketIdからルームを特定)
                roomToUpdate.chat.push({userInfo: userInfo, chat: chat});
                // 配信ルームのクライアントにルーム情報を送信
                io.to(`broadcast_${roomId}`).emit(`roomInfo`, roomToUpdate);
                // 配信ルームのクライアントに読み上げ指示を送信
                io.to(`broadcast_${roomId}`).emit(`chatSpeech`, roomToUpdate);
                return;
            }
        }
    }
};


module.exports = { roomChat };