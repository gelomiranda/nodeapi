module.exports = function(app) {
 
    const Nephrologist = require('../controller/nephrologist.controller.js');

    app.post('/api/nephrologists', Nephrologist.create);
 
    app.get('/api/nephrologists', Nephrologist.findAll);
 
    app.get('/api/nephrologists/:id', Nephrologist.findById);
 
    app.put('/api/nephrologists/:id', Nephrologist.update);
 
    app.delete('/api/nephrologists/:id', Nephrologist.delete);
}