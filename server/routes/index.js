const express = require('express');
const router = express.Router();
const users = require('./users');
const items = require('./items');
const categories = require('./categories');
const statuses = require('./statuses');
const conditions = require('./conditions');

router.use('/users', users);
router.use('/items', items);
router.use('/categories', categories);
router.use('/statuses', statuses);
router.use('/conditions', conditions);

module.exports = router;