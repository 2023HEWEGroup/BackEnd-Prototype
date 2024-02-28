const nodemailer = require('nodemailer');


// 認証メールを送信する関数

exports.sendEmail = async (req, res, next, to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.VERIFICATION_MAIL_SENDER,
                pass: process.env.VERIFICATION_MAIL_PASSWORD,
            },
        });
        await transporter.sendMail({
            from: {
                name: "UNGRA",
                address: process.env.VERIFICATION_MAIL_SENDER,
            },
            to: to,
            subject: subject,
            text:
            `${text}\n\n${process.env.VERIFICATION_MAIL_INFO}
            `,
        });
        next();
    } catch (err) {
        return res.status(500).json();
    }
}