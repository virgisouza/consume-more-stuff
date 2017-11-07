const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
//const db = require('./models');
const routes = require('./routes');
const redis = require('connect-redis')(session);
const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const saltRounds = 12;
const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(exress.static('public'));
app.use(session({
  store: new redis(),
  secret: 'aTeam',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('api', routes);

passport.serializeUser((user, done) => {
  console.log('serializing');
  return done(null, {
    id: user.id,
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  console.log(user);
  console.log('deserializing');
  db.user.findOne({where: { id: user.id }})
  .then((user) => {
    return done(null, {
      id: user.id,
      username: user.username
    });
  });
});

passport.use(new LocalStrategy(function (username, password, done) {
  db.user.findOne({where: {username: username}})
    .then((user) => {
      if(user === null){
        return done(null, false, {message: 'bad username or password'});
      }else{
        bcrypt.compare(password, user.password)
        .then((res) => {
          console.log(res);
          if(res){
            var foundUser = user.get();
            delete foundUser.password;
            return done(null, foundUser);
          }else{
            return done(null, false, {message: 'bad username or password'});
          }
        });
      }
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
}));

app.listen(PORT, () => {
  //db.sequelize.sync({ force:true });
  console.log(`Listening on port: S{PORT}`);
});