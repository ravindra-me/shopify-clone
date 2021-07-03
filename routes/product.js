const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

const auth = require("../middleware/auth");

router.get('/', productController.listAllProduct);
router.post("/new", auth.verifyTokenOfAdmin, productController.addProduct);
router.put("/", auth.verifyTokenOfAdmin, productController.putAction);
router.get('/:slug', productController.getSingleProduct);
router.put("/:slug", auth.verifyTokenOfAdmin, productController.putSingleProduct);
module.exports = router;
