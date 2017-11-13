const express = require('express');
const router = express.Router();

const db = require('../../models');
const Items = db.Item;
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

router.post('/', upload.single('file'), (req, res) => {

  let data = req.body;
  return Items.create({
    name: data.name,
    file: req.file.path, //where image is on user's comp
    body: data.body,
    price: data.price,
    category_id: data.category_id,
    condition_id: data.condition_id,
    user_id: req.user.id,
    status_id: 1
  })
  .then(item => {
    return item.reload({include:[
      
      {model: User, as: 'User'}
      
    ]})
    .then(newItem => {
      return res.json(newItem);
    })
  })
  .catch((error) => {
    console.log(error);
  });
});

router.get('/', (req, res) => {
  return Items.findAll({include : [

    {model: User, as: 'User'}

    ],
    order: [
      ['updatedAt', 'DESC']
    ]

  })
  .then(items => {
    return res.json(items);
  })
  .catch(error => {
    console.log(error);
  });
});

router.get('/initial', (req, res) => {
  return Items.findAndCountAll({
    offset : 0,
    limit : 3
  })
  .then(initialItems => {
    console.log('=============================')
    return res.json(initialItems);
  })
  .catch(error => {
    console.log(error);
  });
});

router.get('/:id', (req, res) => {
  return Items.findOne({include:[
    {model: User, as: 'User'}
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
    where: {id: req.params.id}
  })
  .then((item) => {
    if (req.user.id === item.user_id) {

      return Items.update({
        name : data.name || item.name,
        file : data.file || item.file,
        body : data.body || item.body,
        price : data.price || item.price,
        category_id : data.category_id || item.category_id,
        condition_id : data.condition_id || item.condition_id
      },
      {where : {id : req.params.id}

      })
      .then((response) => {
        return Items.findOne({include:[
          {model: User, as: 'User'}
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

  })//end main .then
  .catch((error) => {
    console.log(error);
  });
});

router.delete('/:id', isAuthenticated, (req, res) => {
  return Items.findOne({
    where : {
      id : req.params.id
    }
  })
  .then((item) => {
    
    if (req.user.id === item.user_id) {
      return Items.update({
        status_id : 2
      },
      {where : {
        id : req.params.id
      }
      })
      .then((response) => {
        return Items.findOne({include : [
          {model : User, as: 'User'}
          ],
          where : {
            id : req.params.id
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
    //not sure exactly what I should do here
    res.redirect('/')
  }
}

module.exports = router;