const { groupBroadcasts } = require("../data/socketData");

// 渡されたユーザーのオブジェクトIDを用いて、ユーザーが何らかの配信に参加中かどうか検証するミドルウェア

exports.isLiving = (userId) => {
    for (const groupBroadcast in groupBroadcasts) {
        for (const room of groupBroadcasts[groupBroadcast]) {
            for (const objId of room.users) {
                if (userId === objId.userId) {
                    return true;
                }
            }
        }
    }
    return false;
}