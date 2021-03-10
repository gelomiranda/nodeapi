module.exports = function(app) {
 
    const BillingHeader = require('../controller/billingheader.controller.js');
 
    // Create a new Customer
    app.post('/api/billingheader', BillingHeader.create);
 
    // // Retrieve all Customer
    app.get('/api/billingheader/:billingHeaderId', BillingHeader.findByPatient);
    app.get('/api/billing/patient/philhealth', BillingHeader.patientUsePhilhealth);


 
    // // Retrieve a single Customer by Id
    // app.get('/api/patients/:patientId', patients.findById);
 
    // //  Update a Customer with Id
    // app.put('/api/patients/:patientId', patients.update);
 
    // // Delete a Customer with Id
    // app.delete('/api/patients/:patientId', patients.delete);
}