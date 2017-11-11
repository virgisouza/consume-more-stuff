const express = require('express');
const router = express.Router();
const categories = require('./categories');
const db = require('../../models');
const Items = db.Item;
const Category = db.Category;
const Condition = db.Condition;
const Status = db.Status;
const User = db.User;
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', '..', 'public', 'uploads', 'items'),
  filename(req, file, cb){
    cb(null, `${file.originalname.split(' ').join('')}`);
  }
})
const upload = multer({ storage });

router.get('/', (req, res) => {
  User.findAll()
  .then((users) => {
    res.json(users);
  });
});

router.get('/:id/items', isAuthenticated, (req, res) => {
  console.log('REQPARAMS', req.params.id);
  console.log('REQUSER', req.user);
  return Items.findAll({include:[
    {model: Category, as: 'Category'},
    {model: Condition, as: 'Condition'},
    {model: User, as: 'User'},
    {model: Status, as: 'Status'}
    ],
    where: {
      user_id: req.user.id
    },
    order: [['updatedAt', 'DESC']]
  })
  .then((items) => {
    if(Number(req.user.id) === Number(req.params.id)){
      return res.json(items);
    }
  })
  .catch((error) => {
    console.log(error);
  });
})

function isAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    next();
  }else{
    //not sure exactly what I should do here
    res.redirect('/')
  }
}

module.exports= router;