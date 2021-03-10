module.exports = (sequelize, Sequelize) => {
    const BillingPaymentHistory = sequelize.define('billingpaymenthistory', {
        payment_mode:{
            type: Sequelize.STRING
        },
        total_payment:{
            type: Sequelize.FLOAT
        },
        total:{
            type: Sequelize.FLOAT
        },
        balance:{
            type: Sequelize.FLOAT
        },
        reference_no: {
            type: Sequelize.STRING
        },
        notes: {
            type: Sequelize.STRING
        },
    });
    return BillingPaymentHistory;
}