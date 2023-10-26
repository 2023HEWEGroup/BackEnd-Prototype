const { v4: uuidv4 } = require('uuid');
const CryptoJS = require("crypto-js");
const User = require("../../models/users");


// ユーザーの新規登録処理

exports.authRegisterHandler = async (req, res, next) => {
    try {
        const uuid = uuidv4();
        const randomInt = Math.floor(Math.random() * 6) + 1;
        const password = req.body.password;
        req.body.password = CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET_KEY);
        const newUser = await new User({
            username: req.body.username,
            userId: req.body.userId,
            password: req.body.password,
            postalCode: req.body.postalCode,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            email: uuid,
            authToken: {
                hashedToken: req.hashedToken,
                createdAt: new Date(),
                unverifiedEmail: req.body.unverifiedEmail,
            },
            defaultIcon: `default_icon${randomInt}.png`,
            defaultHeader: `default_header${randomInt}.png`
        })
        const user = await newUser.save();
        req.user = user;
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}