const { groupBroadcasts } = require("../data/socketData");

// 渡されたユーザーのオブジェクトIDを用いて、配信に参加中のSocketIDを特定するミドルウェア

exports.searchSocketIDFromUserId = (userId) => {
    for (const groupBroadcast in groupBroadcasts) {
        for (const room of groupBroadcasts[groupBroadcast]) {
            for (const user of room.users) {
                if (userId === user.userId) {
                    return user.socketId;
                }
            }
        }
    }
    return false;
}