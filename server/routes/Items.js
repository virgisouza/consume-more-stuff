const express = require('express');
const router = express.Router();
const items = require('./items');
const db = require('../models');
const Items = db.item;
const Category = db.category;

// router.post('/new', (req, res) => {
//   let data = req.body;
//   return Items.create({
//     name: data.name,

//   })
// })

router.get('/all', (req, res) => {
  return Items.findAll({include:[]})
  .then((items) => {
    return res.json(items)
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/:category_id', (req, res) => {
  return Items.findAll({include:[],
    where: {
      category_id: req.params.category_id
    }
  })
  .then((items) => {
    return res.json(items)
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/:category_id/item/:id', (req, res) => {
  return Items.findOne({include:[],
    where: {
      id: req.params.id
    }
  })
  .then((item) => {
    return res.json(item);
  })
  .catch((error) => {
    console.log(error);
  });
});

module.exports = router;