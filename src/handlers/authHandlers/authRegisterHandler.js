const { v4: uuidv4 } = require('uuid');
const CryptoJS = require("crypto-js");
const User = require("../../models/users");


// ユーザーの新規登録処理

exports.authRegisterHandler = async (req, res, next) => {
    try {
        const uuid = uuidv4();
        const randomInt = Math.floor(Math.random() * 8) + 1;
        const password = req.body.password;
        req.body.password = CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET_KEY);
        const newUser = await new User({
            username: req.body.username,
            userId: req.body.userId,
            password: req.body.password,
            upperName: req.body.upperName,
            lowerName: req.body.lowerName,
            upperNameKana: req.body.upperNameKana,
            lowerNameKana: req.body.lowerNameKana,
            postalCode: req.body.postalCode,
            prefecture: req.body.prefecture,
            city: req.body.city,
            town: req.body.town,
            houseNumber: req.body.houseNumber ? req.body.houseNumber : "",
            phoneNumber: req.body.phoneNumber,
            email: uuid,
            authToken: {
                hashedToken: req.hashedToken,
                createdAt: new Date(),
                unverifiedEmail: req.body.unverifiedEmail,
            },
            creditCard: {
                cardName: req.body.cardName ? req.body.cardName : "",
                number: req.body.number ? CryptoJS.AES.encrypt(req.body.number, process.env.CREDIT_CARD_NUMBER_KEY) : uuid,
                cvc: req.body.cvc ? CryptoJS.AES.encrypt(req.body.cvc, process.env.CREDIT_CARD_CVC_KEY) : "",
                expiry: req.body.expiry ? req.body.expiry : "",
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