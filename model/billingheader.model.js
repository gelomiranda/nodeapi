module.exports = (sequelize, Sequelize) => {
    const BillingHeader = sequelize.define('billingheader', {
        use_philhealth: {
            type: Sequelize.BOOLEAN
        },
        total:{
            type: Sequelize.FLOAT
        },
        balance:{
            type: Sequelize.FLOAT
        },
        status: {
            type: Sequelize.BOOLEAN
        },
        payment_notes: {
            type: Sequelize.STRING
        },
    },
    {
      indexes:[
       {
         unique: false,
         fields:['use_philhealth'],
         where:{
            use_philhealth : false
         }
       }
      ]
    });
    return BillingHeader;
}