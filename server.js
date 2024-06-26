// Expressセットアップ

const express = require("express");
const app = express();


// 各種モジュールのインポート

const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
require("dotenv").config();


// アプリの設定

app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false, // フロントのsrc属性から画像を指定したとき、ヘルメットが阻止するのを防ぐ。
}));
app.use(cors());


// APIルートの分割

const authRoute = require("./src/routes/authRoutes");
const userRoute = require("./src/routes/userRoutes");
const productRoute = require("./src/routes/productRoutes");
const settingRoute = require("./src/routes/settingRoutes");
const notifyRoute = require("./src/routes/notifyRoutes");
const groupRoute = require("./src/routes/groupRoutes");



// APIルーティング

app.use("/client/auth", authRoute);
app.use("/client/user", userRoute);
app.use("/client/product", productRoute);
app.use("/client/setting", settingRoute);
app.use("/client/notify", notifyRoute);
app.use("/client/group", groupRoute);


// その他ルーティング

app.use("/uploads", express.static(path.join(__dirname, 'uploads')));


// MongoDBに接続

try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("DBに接続中");
} catch (err) {
    console.log(err);
}


// Express.jsサーバーの起動

app.listen(process.env.PORT, (req, res) => {
    console.log("サーバーが起動しました");
})


// socket.IO
const server = require("http").createServer(app); // Expressを用いないserverも必要なので作成

// サーバーオブジェクトsocketioを作成する
const { Server } = require("socket.io");
const { socketConnection } = require("./socketIO/socketConnection");
const io = new Server(server, {
    cors: {                      // corsモジュールでは上手くCORSできないため、Server作成時の引数にオプションを追加する
        origin: "*",
        methods: ["GET", "POST"],
    },
});

// ブラウザから接続されたときの処理を定義する
io.on('connection', socketConnection(io));

// serverを別ポートで待ち受ける。
// ※app.listenだとNG。
server.listen(process.env.SOCKET_IO_PORT);