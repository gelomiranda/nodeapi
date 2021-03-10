module.exports = function(app) {
 
    const Treatment = require('../controller/treatment.controller.js');
 
    //Create a new vital sign
    app.post('/api/treatments', Treatment.create);

    //Create a new vital sign
    app.get('/api/treatments', Treatment.findAll);
 
    app.put('/api/treatments/:treatmentId', Treatment.update);
 
    // Retrieve treatments by Id
    app.get('/api/treatments/:treatmentId', Treatment.findById);
    
    // Retrieve treatments by Id
    app.get('/api/treatments/patient/:patientId', Treatment.findByPatient);
}