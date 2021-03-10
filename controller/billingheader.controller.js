const db = require('../config/db.config.js');
const BillingHeader = db.BillingHeader;
const BillingDetail = db.BillingDetail;
const Patient = db.Patient;


exports.create = (req,res) => {
    BillingHeader.create(req.body)
    .then(BillingHeader => {
        res.status(200).send({'billingHeaderId' : BillingHeader.id });
    }).catch(err => {
        res.status(500).send(err);
    })
}


exports.findByPatient = (req,res) => {
    const id = req.params.billingHeaderId;
    Patient.findOne({
        where: {
          id: id
        },
        include: BillingHeader
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({message: err
        });
    });
}

/*Get total philhealth used every year*/
exports.patientUsePhilhealth = (req,res) => {
    const id = req.params.billingHeaderId;
    BillingHeader.findAndCountAll({
        where: {
           patientId: '22',
           use_philhealth : true
        }
     })
     .then(result => {
        res.send(result);
       //console.log(result.count);
       //console.log(result.rows);
     });
}


