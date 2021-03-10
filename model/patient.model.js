module.exports = (sequelize, Sequelize) => {
    var regName = new RegExp(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/);
    var moment = require("moment");

    
    const enumList = require('../config/enum');
    
    const Patient = sequelize.define('patient', {
      first_name: {
        type: Sequelize.STRING,
        validate:  {
          notEmpty:{
            msg: 'First name field cannot be empty.'
          },
          customValidator(value) {
            if (!regName.test(value)) {
              throw new Error("First name field is invalid.");
            }
          }
        }
      },
      middle_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:  {
          notEmpty:{
            msg: 'Middle name field cannot be empty.'
          },
          customValidator(value) {
            if (!regName.test(value)) {
              throw new Error("Middle name field is invalid.");
            }
          },
          notEmpty:{
            msg: 'Middle name field cannot be empty.'
          }          
        }     
      },
      last_name: {
        type: Sequelize.STRING,
        validate:  {
          customValidator(value) {
            if ( !regName.test(value)) {
              throw new Error("Last name field is invalid.");
            }
          },
          notEmpty:{
            msg: 'Last name field cannot be empty.'
          }          
        }   
      },
      date_of_birth: {
        type: Sequelize.DATEONLY,
        validate:{
          notEmpty:{
            msg: 'Date of birth field cannot be empty.'
          },
          isDate:{
            msg: 'Date of birth field is invalid.'
          }
        }
      },
      address: {
        type: Sequelize.STRING,
        validate:  {
          notEmpty:{
            msg: 'Address  field cannot be empty.'
          }          
        }
      },
      contact_number: {
        type: Sequelize.STRING,
        validate:  {
          isNumeric:{
            msg: 'Contact number should be numeric.'
          }          
        }
      },
      civil_status: {
        type: Sequelize.STRING,
        validate:{
          isIn: {
            args: [['Single', 'Married','Widow']],
            msg: 'Invalid Civil Status',
          },
        },
      },
      gender : {
        type: Sequelize.STRING,
        validate:{
          isIn: {
            args: [['Male', 'Female',]],
            msg: 'Invalid Gender',
          },
        },
      },
      blood_type : {
        type: Sequelize.STRING,
        validate:{
          isIn: {
            args: [['A+', 'A-','B+','B-','O+','O-','AB+','AB-']],
            msg: 'Invalid Blood Type',
          },
        },
      },
      philhealth: {
        type: Sequelize.STRING
      },
      person_to_contact: {
        type: Sequelize.STRING
      },
      person_to_contact_number: {
        type: Sequelize.STRING
      },
      monday: {
        type: Sequelize.BOOLEAN
      },
      tuesday: {
        type: Sequelize.BOOLEAN
      },
      wednesday: {
        type: Sequelize.BOOLEAN
      },
      thursday: {
        type: Sequelize.BOOLEAN
      },
      friday: {
        type: Sequelize.BOOLEAN
      },
      saturday: {
        type: Sequelize.BOOLEAN
      },
      sunday: {
        type: Sequelize.BOOLEAN
      },
      full_name: {
        type: Sequelize.VIRTUAL,
        get () {
          return this.getDataValue('first_name') + ' ' + this.getDataValue('middle_name')
        }
      },
      age: {
        type: Sequelize.VIRTUAL,
        get () {
          return moment().diff(this.getDataValue('date_of_birth'), 'years',false);
        }
      },
      date_of_birth_formatted:{
        type:Sequelize.VIRTUAL,
        get() {
          return moment(this.getDataValue('date_of_birth')).format('MMMM D, YYYY');
        },
      }
    });
    
    Patient.associate = function(models) {
      Patient.hasMany(models.History, {as: 'histories'})
    };

    return Patient;
  }