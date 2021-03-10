module.exports = function(app) {
 
    const Item = require('../controller/item.controller.js');
 
    // Create a new Item
    app.post('/api/items', Item.create);
 
    app.get('/api/items', Item.findAll);
    //Retrieve all items that are included in the treatment package
    app.get('/api/items/package', Item.findIncludedInPackage);
    // Retrieve all Items
    
    //Retrieve a single Customer by Id
    app.get('/api/items/:itemId', Item.findById);

    //  Update a Item with Id
    app.put('/api/items/:itemId', Item.update);
 
    //Delete a Item with Id
    app.delete('/api/items/:itemId', Item.delete);
}