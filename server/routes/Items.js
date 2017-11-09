const express = require('express');
const router = express.Router();
const items = require('./Items');
const db = require('../../models');
const Items = db.Item;
const Category = db.Category;
const Condition = db.Condition;
const Status = db.Status;
const User = db.User;

router.post('/new', (req, res) => {
  let data = req.body;
  console.log(data);
  return Items.create({
    name: data.name,
    image: data.image,
    body: data.body,
    price: data.price,
    category_id: data.category_id,
    condition_id: data.condition_id,
    //remember you changed this
    user_id: data.user_id,
    status_id: 1
  })
  .then((item) => {
    return res.json(item);
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/', (req, res) => {
  console.log('something');
  return Items.findAll({include:[
    {model:Category, as: 'Category'},
    {model: Condition, as: 'Condition'},
    {model: User, as: 'User'},
    {model: Status, as: 'Status'}
    ],
    where: {
      status_id: 1
    },
    order: [['updatedAt', 'DESC']]})
  .then((items) => {
    return res.json(items)
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/:num', (req, res) => {
  const limit = req.query.num;
  return Items.findAndCountAll({
    where : { status_id : 1 },
    limit : limit,
    offset : 0
  }).then(items => {
    return res.json(items);
  });
});

//should probably be in category route
// router.get('/:category_id', (req, res) => {
//   return Items.findAll({include:[
//     {model:Category, as: 'Category'},
//     {model: Condition, as: 'Condition'},
//     {model: User, as: 'User'},
//     {model: Status, as: 'Status'}
//     ],
//     where: {
//       category_id: req.params.category_id
//     }
//   })
//   .then((items) => {
//     return res.json(items)
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// });

router.get('/:id', (req, res) => {
  return Items.findOne({include:[
    {model:Category, as: 'Category'},
    {model: Condition, as: 'Condition'},
    {model: User, as: 'User'},
    {model: Status, as: 'Status'}
    ],
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

router.put('/:id', isAuthenticated, (req, res) => {
  return Items.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((item) => {
    let data = req.body;
    if(req.user.id === item.user.id){
      return Items.update({
        name: data.name || item.name,
        image: data.image || item.image,
        body: data.body || item.body,
        price: data.price || item.price,
        category_id: data.category_id || item.category_id,
        condition_id: data.condition_id || item.condition_id
      },
      {where:{
        id: req.params.id
      }
      })
      .then((response) => {
        return Items.findOne({include:[
          {model: Category, as: 'Category'},
          {model: Condition, as: 'Condition'},
          {model: User, as: 'User'},
          {model: Status, as: 'Status'}
          ],
          where: {
            id: req.params.id
          }
        })
        .then((updatedItem) => {
          return res.json(updatedItem);
        });
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });
});

router.delete('/:id', isAuthenticated, (req, res) => {
  return Items.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((item) => {
    //check req.user is right
    if(req.user.id === item.user.id){
      return Items.update({
        status_id: 2
      },
      {where:{
        id: req.params.id
      }
      })
      .then((soldItem) => {
        res.json(soldItem);
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });
});

function isAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    console.log('isAuthenticated')
    next();
  }else{
    console.log('not isAuthenticated')
    //not sure exactly what I should do here
    res.redirect('/')
  }
}

module.exports = router;