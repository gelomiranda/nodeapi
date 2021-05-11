const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*"
};

const db = require('./config/db.config.js');
// force: true will drop the table if it already exists
db.sequelize.sync({alter: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
});

app.use(cors());

global.__basedir = __dirname;

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// import passport and passport-jwt modules
const passport = require('passport');

app.use(passport.initialize());

require('./route/patient.route.js')(app);
require('./route/history.route.js')(app);
require('./route/vitalsign.route.js')(app);
require('./route/treatment.route.js')(app);
require('./route/item.route.js')(app);
require('./route/itemhistory.route.js')(app);
require('./route/nephrologist.route.js')(app);
require('./route/billingheader.route.js')(app);
require('./route/billingdetail.route.js')(app);
require('./route/user.route.js')(app);
require('./route/login.route.js')(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Gelo application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// app.listen(8080,'127.0.0.1',function(){
//   app.close(function(){
//     app.listen(8080,'192.168.68.')
//   })c
//  })