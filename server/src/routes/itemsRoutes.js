const express = require('express');
const { getProducts } = require('../controllers/itemsController');
const { getProductForCategory } = require('../controllers/itemsController');

const router = express.Router();

router.get('/', getProducts);
router.get('/category', getProductForCategory);

module.exports = router;
