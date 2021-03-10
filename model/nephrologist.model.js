module.exports = (sequelize, Sequelize) => {
    const Nephrologist = sequelize.define('nephrologist', {
        first_name: {
            type: Sequelize.STRING
        },
        middle_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        }      
    });
    return Nephrologist;
}