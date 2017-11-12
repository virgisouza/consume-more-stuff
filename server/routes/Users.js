const express = require('express');
const router = express.Router();

const db = require('../../models');
const Items = db.Item;
const User = db.User;

router.get('/', (req, res) => {
  User.findAll()
  .then((users) => {
    return res.json(users);
  });
});

router.get('/:id/items', isAuthenticated, (req, res) => {
  return User.findAll({include : [
    {model : Items}
    ],
    where : {
      user_id: req.user.id //check and fix
    },
    order : [['updatedAt', 'DESC']]
  })
  .then((items) => {
    if(Number(req.user.id) === Number(req.params.id)){
      return res.json(items);
    }
  })
  .catch((error) => {
    console.log(error);
  });
});

function isAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    next();
  }else{
    //not sure exactly what I should do here
    res.redirect('/')
  }
};

module.exports= router;