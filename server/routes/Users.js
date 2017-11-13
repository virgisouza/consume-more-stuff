const express = require('express');
const router = express.Router();

const db = require('../../models');
const Items = db.Item;
const User = db.User;

const bcrypt = require('bcrypt');
const saltRounds = 12;

/*USER ITEMS*/
router.get('/', (req, res) => {
  User.findAll()
  .then(users => {
    return res.json(users);
  });
});

router.get('/:id/items', isAuthenticated, (req, res) => {
  return User.findAll({include : [

    {model : Items}

    ],
    where : {
      user_id : req.user.id //check and fix
    },
    order : [['updatedAt', 'DESC']]
  })
  .then(items => {
    if (Number(req.user.id) === Number(req.params.id)) {
      return res.json(items);
    }
  })
  .catch(error => {
    console.log(error);
  });
});

/*AUTHENTICATION*/
passport.serializeUser((user, done) => {
  console.log('serializing');
  return done(null, {
    id: user.id,
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  console.log('deserializing');
  db.User.findOne({where : { id : user.id }})
  .then(user => {
    return done(null, {
      id: user.id,
      username: user.username
    });
  });
});

passport.use(new LocalStrategy(function(username, password, done) {
  db.User.findOne({where: {username : username}})
    .then(user => {
      if (user === null) {
        return done(null, false, {message : 'bad username or password'});
      } else {
        bcrypt.compare(password, user.password)
        .then(res => {
          if (res) {
            var foundUser = user.get();
            delete foundUser.password;
            return done(null, foundUser);
          } else {
            return done(null, false, {message : 'bad username or password'});
          }
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
}));

/*LOGIN AND REGISTER*/
router.post('/login', passport.authenticate('local'), function(req, res) {
  return res.json(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  return res.sendStatus(200);
});

router.post('/register', (req, res) => {
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      db.User.create({
        username: req.body.username,
        password: hash,
        email: req.body.email
      })
      .then((user) => {
        return res.json(user);
      })
      .catch((error) => {
        return res.send('Bad Username');
      });
    });
  });
});


function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.redirect('/');
  }
};

module.exports= router;