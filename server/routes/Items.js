const express = require('express');
const router = express.Router();
const items = require('./items');
const db = require('../../models');
const Items = db.item;
const Category = db.category;


router.post('/new', (req, res) => {
  let data = req.body;
  return Items.create({
    name: data.name,
    image: data.image,
    body: data.body,
    price: data.price,
    category_id: data.category_id,
    condition_id: data.condition_id,
    user_id: req.user.id,
    status_id: data.status_id
  });
});

router.get('/all', (req, res) => {
  return Items.findAll({include:[
    {model:Category, as: 'Category'},
    {model: Condition, as: 'Condition'},
    {model: User, as: 'User'},
    {model: Status, as: 'Status'}
    ]})
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