const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

router.get('/', productController.listAllProduct);
router.post('/new', productController.addProduct);
router.put('/', productController.putAction);
router.get('/:slug', productController.getSingleProduct);
router.put('/:slug', productController.putSingleProduct);
module.exports = router;
