module.exports = (sequelize, Sequelize) => {
    var integerMsg = 'Systolic field accept number only.';
    const VitalSign = sequelize.define('vitalsigns', {
        blood_pressure_systolic: {
            type: Sequelize.INTEGER,
            validate: {
                isNumeric:{
                    msg: integerMsg
                },
                isInt:{
                    msg: integerMsg
                },
                customValidator(value) {
                    if (value < 0) {
                      throw new Error(integerMsg);
                    }
                }
            }
        },
        blood_pressure_diastolic: {
            type: Sequelize.INTEGER
        },
        temperature: {
            type: Sequelize.FLOAT,
            validate:{
                notEmpty:{
                    msg: 'Temperature field must not be empty.'
                }            
            }
        },
        respiratory_rate: {
            type: Sequelize.INTEGER,
            validate:{
                notEmpty:{
                    msg: 'Respiratory rate field must not be empty.'
                },
                customValidator(value) {
                    if (value < 0) {
                    throw new Error('Respiratory rate field accept number only.');
                    }
                }
            }
        },
        heart_rate: {
            type: Sequelize.INTEGER,
            validate:{
                notEmpty:{
                    msg: 'Heart rate field must not be empty.'
                },
                customValidator(value) {
                    if (value < 0) {
                    throw new Error('Heart rate field accept number only.');
                    }
                }
            }
        }
    });
    return VitalSign;
}