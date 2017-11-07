const express = require('express');
const router = express.Router();
const users = require('./users');
const items = require('./items');
const categories = require('./categories');

router.use('/users', users);
router.use('/items', items);
router.use('/categories', categories);

module.exports = router;