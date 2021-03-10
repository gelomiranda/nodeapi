module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define('item', {
        description: {
            type: Sequelize.STRING
        },
        unit: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.FLOAT
        },
        item_type: {
            type: Sequelize.STRING
        },
        include_in_package: {
            type: Sequelize.STRING
        },
        covered_by_philhealth:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        billing_quanity: {
          type: Sequelize.VIRTUAL,
          get () {
            return 1;
          }
        }
    });
    return Item;
}