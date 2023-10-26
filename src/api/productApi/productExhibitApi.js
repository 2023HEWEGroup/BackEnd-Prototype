const { getBodyUser } = require("../../controllers/userControllers/getBodyUser");
const { productExhibitHandler } = require("../../handlers/productHandlers/productExhibitHandler");
const { isError } = require("../../validations/isError");
const { productExhibitValidation } = require("../../validations/productValidations/productExhibitValidation");
const router = require("express").Router();


// 商品出品API

router.post("/",
    productExhibitValidation,
    isError,
    getBodyUser,
    productExhibitHandler,
    (req, res) => {
        return res.status(200).json("商品の出品が完了しました");
    }
)


module.exports = router;