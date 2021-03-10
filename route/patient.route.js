module.exports = function(app) {
 
    const patients = require('../controller/patient.controller.js');
 
    // Create a new Customer
    app.post('/api/patients', patients.create);
 
    // Retrieve all Customer
    app.get('/api/patients', patients.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/patients/:patientId', patients.findById);
    
    
    // Retrieve a single Customer by Id
    app.get('/api/patients/name/:patientName', patients.findByName);
 
    //  Update a Customer with Id
    app.put('/api/patients/:patientId', patients.update);
 
    // Delete a Customer with Id
    app.delete('/api/patients/:patientId', patients.delete);
}