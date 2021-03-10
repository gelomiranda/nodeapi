module.exports = function(app) {
 
    const BillingDetail = require('../controller/billingdetail.controller.js');
 
    // Create a new BillingDetail
    app.post('/api/billingdetails', BillingDetail.create);
 
    // Retrieve all Billing Details
    app.get('/api/billingdetails', BillingDetail.findAll);
 
    // // Retrieve a single Customer by Id
    // app.get('/api/patients/:patientId', patients.findById);
 
    // //  Update a Customer with Id
    // app.put('/api/patients/:patientId', patients.update);
 
    // // Delete a Customer with Id
    // app.delete('/api/patients/:patientId', patients.delete);
}