const express = require('express');
const router = express.Router();
const collection = require('../controller/collection');

router.get('/', collection.getAllCollections);
router.post('/new', collection.createSingleCollection);
router.delete('/delete', collection.deleteMultipleCollections);
router.get('/:slug', collection.singleCollection);

module.exports = router;
