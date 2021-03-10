module.exports = (sequelize, Sequelize) => {
    const UserRoute = sequelize.define('routes', {
        route: {
            type: Sequelize.STRING,
            validate: {
                notEmpty:{
                    msg: 'Route field cannot be empty.'
                }
            }
        }  
    });
    return UserRoute;
}