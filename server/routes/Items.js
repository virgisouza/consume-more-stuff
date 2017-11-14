const express = require('express');
const router = express.Router();
const items = require('./Items');
const db = require('../../models');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', '..', 'public', 'uploads', 'items'),
  filename(req, file, cb){
    cb(null, `${file.originalname.split(' ').join('')}`);
  }
})
const upload = multer({ storage });
const Items = db.Item;
const Category = db.Category;
const Condition = db.Condition;
const Status = db.Status;
const User = db.User;

router.post('/new',  isAuthenticated, upload.single('file'), (req, res) => {
  let data = req.body;
  let image = '';

  //here image will default to generic stock photo if no image is uploaded
  if(req.file === ''){
    image = 'uploads/items/Thumbnail.png'
  }else{
    image = (req.file.path).split('/').splice(7).join('/');
  }

  return Items.create({
    name: data.name,
    file: image, //set to image file path (where's it located on YOUR comp now that it's saved)
    body: data.body,
    price: data.price,
    category_id: data.category_id,
    condition_id: data.condition_id,
    user_id: req.user.id,
    status_id: 1
  })
  .then((item) => {
    console.log(item, 'item promise')
    return item.reload({include:[
      {model:Category, as: 'Category'},
      {model: Condition, as: 'Condition'},
      {model: User, as: 'User'},
      {model: Status, as: 'Status'}
    ]})
    .then((newItem) => {
      console.log(newItem, 'new item')
      return res.json(newItem);
    })
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/', (req, res) => {
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
    return res.json(items);
  })
  .catch((error) => {
    console.log(error);
  });
});

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

router.put('/:id', isAuthenticated, upload.single('file'), (req, res) => {
  let image = '';
  if(req.file){
    image = (req.file.path).split('/').splice(7).join('/');
  }
  return Items.findOne({
    where: {
      id: req.body.id
    }
  })
  .then((item) => {
    let data = req.body;
    if(req.user.id === item.user_id){
      return Items.update({
        name: data.name || item.name,
        file: image || item.file,
        body: data.body || item.body,
        price: data.price || item.price,
        category_id: data.category_id || item.category_id,
        condition_id: data.condition_id || item.condition_id
      },
      {where:{
        id: req.body.id
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
            id: req.body.id
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
    if(req.user.id === item.user_id){
      return Items.update({
        status_id: 2
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
        .then((soldItem) => {
          return res.json(soldItem);
        });
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });
});

function isAuthenticated(req, res, next){
  if (req.isAuthenticated()) {
    console.log('isAuthenticated');
    next();
  } else {
    console.log('not isAuthenticated');
    res.redirect('/')
  }
}

module.exports = router;