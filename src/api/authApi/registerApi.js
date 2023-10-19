const router = require("express").Router();
const { registerValidation } = require("../../validations/authValidations/registerValidation");
const { isError } = require("../../validations/isError");
const { registerHandler } = require("../../handlers/authHandlers/registerHandler");


// 新規登録API

router.post("/", 
    registerValidation,
    isError,
    registerHandler
);


module.exports = router;