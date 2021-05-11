module.exports = function(app) {
 
    const vendor = require('../controller/vendor.controller.js');
 
    //Create a new Vendor
    app.post('/api/vendors', vendor.create);
 
    //Retrieve all Vendors
    app.get('/api/vendors', vendor.findAll);
 
    //Retrieve a Vendor  by Id
    app.get('/api/vendors/:id', vendor.findById);
 
    //Update a vendor with Id
    app.put('/api/vendors/:id', vendor.update);
 
    //Delete a Customer with Id
    app.delete('/api/vendors/:id', vendor.delete);

}