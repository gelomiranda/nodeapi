module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('vendor', {
        name: {
            type: Sequelize.STRING,
            validate:  {
                notEmpty:{
                  msg: 'Company name field cannot be empty.'
                }
            }
        },
        address: {
            type: Sequelize.STRING,
            validate:  {
                notEmpty:{
                  msg: 'Address name field cannot be empty.'
                }
            }
        },
        city: {
            type: Sequelize.STRING
        },
        zip: {
            type: Sequelize.STRING
        },
        contact_no: {
            type: Sequelize.STRING
        },
        email_address: {
            type: Sequelize.STRING
        },
        remarks: {
            type: Sequelize.STRING
        }
    });
    return User;
}