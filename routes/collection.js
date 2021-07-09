const express = require('express');
const router = express.Router();
const collection = require('../controller/collection');

const auth = require('../middleware/auth');

router.get('/', collection.getAllCollections);
router.post('/new', auth.verifyTokenOfAdmin, collection.createSingleCollection);
router.delete(
  '/delete',
  auth.verifyTokenOfAdmin,
  collection.deleteMultipleCollections
);
router.get('/:slug', collection.singleCollection);

module.exports = router;
