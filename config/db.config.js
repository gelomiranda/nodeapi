const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env')  })
console.log(process.env.DB);
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB,  process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql' 
  // pool: {
  //   max: env.max,
  //   min: env.pool.min,
  //   acquire: env.pool.acquire,
  //   idle: env.pool.idle
  // }
});
console.log('test')

const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;



//Models/tables
db.User = require('../model/user.model.js')(sequelize, Sequelize);

db.Patient = require('../model/patient.model.js')(sequelize, Sequelize);
db.Treatment = require('../model/treatment.model.js')(sequelize, Sequelize);
db.MonitoringSheet = require('../model/monitoringsheet.model')(sequelize, Sequelize);


db.History = require('../model/history.model.js')(sequelize, Sequelize);


db.VitalSign = require('../model/vitalsign.model.js')(sequelize, Sequelize);
db.UserRoute = require('../model/user_route.model.js')(sequelize, Sequelize);
db.RouteAccess = require('../model/mainroute.model.js')(sequelize, Sequelize);

db.Nephrologist = require('../model/nephrologist.model.js')(sequelize, Sequelize);

db.Item = require('../model/item.model.js')(sequelize, Sequelize);
db.ItemHistory = require('../model/itemhistory.model.js')(sequelize, Sequelize);

db.BillingHeader = require('../model/billingheader.model.js')(sequelize, Sequelize);
db.BillingDetail = require('../model/billingdetail.model.js')(sequelize, Sequelize);
db.BillingPaymentHistory = require('../model/billingpaymenthistory.model.js')(sequelize, Sequelize);



db.Item.hasMany(db.ItemHistory,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' });



db.Patient.hasMany(db.Treatment,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' });


db.Treatment.belongsTo(db.Patient,{ foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

/*Monitoring Assiocation
* Treatment has many monitoring record
*/
db.Treatment.hasMany(db.MonitoringSheet);


db.MonitoringSheet.belongsTo(db.Treatment);

//db.History.belongsTo(db.Patient, {foreignKey: 'patient_id', as: 'patient'})
db.VitalSign.belongsTo(db.Patient, {foreignKey: 'patient_id', as: 'patient'})
db.RouteAccess.belongsTo(db.UserRoute, {foreignKey: 'route_id', as: 'route'})


db.Nephrologist.hasMany(db.Patient);
db.Patient.belongsTo(db.Nephrologist);


/*Billing Model
 Treatment has many billing
 First bill will be settel upon treatment
 2nd bill can be created during the treatment and will be settle on the next treatment
 Billing has one patient
*/

db.Patient.hasMany(db.BillingHeader);
db.BillingHeader.hasMany(db.BillingDetail,{foreignKey:'billingHeaderId', as : 'billingHeadernode'});
db.BillingHeader.hasMany(db.BillingPaymentHistory,{foreignKey:'billingHeaderId', as : 'billingHeader'});
db.Treatment.hasMany(db.BillingHeader);
//db.BillingDetail.belongsTo(db.BillingHeader);


module.exports = db;