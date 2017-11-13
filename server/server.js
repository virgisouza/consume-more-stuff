const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const db = require('../models');
const routes = require('./routes');

const redis = require('connect-redis')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const multer  = require('multer')
const upload = multer({ destination: 'uploads/' })

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
  store: new redis(),
  secret: 'aTeam',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  }else{
    //not sure exactly what I should do here
    return res.redirect('/')
  }
}

app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Listening on port: ${PORT}`);
});