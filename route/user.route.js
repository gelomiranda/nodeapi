module.exports = function(app) {
 
    const User = require('../controller/user.controller.js');
 
    //Create a new vital sign
    app.post('/api/users', User.create);
 
    // // Retrieve all Users
    app.get('/api/users', User.findAll);
 
    // // Retrieve a single Customer by Id
    // app.get('/api/patients/:patientId', patients.findById);
 
    // //  Update a Customer with Id
    //app.put('/api/vitalsigns/:patientId', vitalsign.update);
 
    // // Delete a Customer with Id
    // app.delete('/api/patients/:patientId', patients.delete);
}