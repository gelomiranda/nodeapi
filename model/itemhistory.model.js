module.exports = (sequelize, Sequelize) => {
    var moment = require("moment");
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
        },
        created_date_formatted:{
            type:Sequelize.VIRTUAL,
            get() {
              return moment(this.getDataValue('createdAt')).format('MMMM D, YYYY');
            },
        }
        
    });
    return ItemHistory;
}