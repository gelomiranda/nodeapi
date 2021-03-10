module.exports = function(app) {
 
    const Nephrologist = require('../controller/nephrologist.controller.js');
 
    // Create a new Customer
    app.post('/api/nephrologists', Nephrologist.create);
 
    // Retrieve all Customer
    app.get('/api/nephrologists', Nephrologist.findAll);
 
    // // Retrieve a single Customer by Id
    // app.get('/api/patients/:patientId', patients.findById);
 
    // //  Update a Customer with Id
    // app.put('/api/patients/:patientId', patients.update);
 
    // // Delete a Customer with Id
    // app.delete('/api/patients/:patientId', patients.delete);
}