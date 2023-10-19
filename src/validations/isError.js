const { validationResult } = require("express-validator");


// バリデート処理の結果エラーがあればリターンさせるミドルウェア

exports.isError = (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        };
        next();
    } catch (err) {
        return res.status(500).json(err);
    }
}