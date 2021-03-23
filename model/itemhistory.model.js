module.exports = (sequelize, Sequelize) => {
    const ItemHistory = sequelize.define('itemhistory', {
        previous_quantity: {
            type: Sequelize.INTEGER
        },
        activity : {
            type: Sequelize.STRING
        },
        succeeding_quantity : {
            type: Sequelize.INTEGER
        },activity : {
            type: Sequelize.STRING
        }
        
    });
    return ItemHistory;
}