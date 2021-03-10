module.exports = (sequelize, Sequelize) => {
    const MainRoute = sequelize.define('route_access', {
        mainroute: {
            type: Sequelize.STRING,
            validate: {
                notEmpty:{
                    msg: 'Main Route field cannot be empty.'
                }
            }
        }  
    });
    return MainRoute;
}