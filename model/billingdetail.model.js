module.exports = (sequelize, Sequelize) => {
    const BillingDetail = sequelize.define('billingdetail', {
        description: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
        total: {
            type: Sequelize.STRING
        }
    });
    
return BillingDetail;
}