const { ItemHistory } = require('../config/db.config.js');

module.exports = function(app) {
 
    const ItemHistory = require('../controller/ItemHistory.controller.js');
 
    // Create a new Item
    app.post('/api/item/history', ItemHistory.create);
 
    app.get('/api/item/history/:itemId', ItemHistory.findById);
    // //Retrieve all items that are included in the treatment package
    // app.get('/api/items/package', Item.findIncludedInPackage);
    // // Retrieve all Items
    
    // //Retrieve a single Customer by Id
    // app.get('/api/items/:itemId', Item.findById);

    // //  Update a Item with Id
    // app.put('/api/items/:itemId', Item.update);
 
    // //Delete a Item with Id
    // app.delete('/api/items/:itemId', Item.delete);
}