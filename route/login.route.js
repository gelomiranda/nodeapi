module.exports = function(app) {
    const User = require('../controller/user.controller.js');

    app.post('/api/login',User.findOne)
}