const db = require('../config/db.config.js');
const User = db.User;
// import passport and passport-jwt modules
const passport = require('passport');

const passportJWT = require('passport-jwt');

// ExtractJwt to help extract the token
let ExtractJwt = passportJWT.ExtractJwt;
// JwtStrategy which is the strategy for the authentication
const jwt = require('jsonwebtoken');
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'wowwow';

// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  let user = getUser({ id: jwt_payload.id });
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
// use the strategy
passport.use(strategy);


exports.create = (req,res) => {
    User.create(req.body)
    .then(User => {
        res.status(200).send('Ok');
    }).catch(err => {
        res.status(500).send(err);
    })
}

exports.findAll = (req,res) => {
    User.findAll({

    })
    .then(data => {
      res.send(data);
    }).catch(err => {
        res.status(500).send(err);
    })
}


exports.findOne = (req,res) => {
    const { name, password } = req.body;
    if (name && password) {
        // we get the user with the name and save the resolved promise
        //returned
        //let user = await User.di
        User.findOne({
          where:{
              name:name,
              password:password
          }  
        })
        .then(user => {
            if (!user) {
                res.status(401).json({ msg: 'No such user found', user });
            }
            if (user.password === password) 
            {
                // from now on we’ll identify the user by the id and the id is
                // the only personalized value that goes into our token
                let payload = { id: user.id };
                let token =  jwt.sign(payload, jwtOptions.secretOrKey);
                res.json({ msg: 'ok', token: token });
            } 
            else 
            {
                res.status(401).json({ msg: 'Password is incorrect' });
            }
        })
        
        
    }
}


