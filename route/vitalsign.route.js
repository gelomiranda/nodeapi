module.exports = function(app) {
 
    const vitalsign = require('../controller/vitalsign.controller.js');
 
    //Create a new vital sign
    app.post('/api/vitalsigns', vitalsign.create);
 
    // // Retrieve all Customer
    // app.get('/api/patients', patients.findAll);
 
    // // Retrieve a single Customer by Id
    // app.get('/api/patients/:patientId', patients.findById);
 
    // //  Update a Customer with Id
    app.put('/api/vitalsigns/:patientId', vitalsign.update);
 
    // // Delete a Customer with Id
    // app.delete('/api/patients/:patientId', patients.delete);
}