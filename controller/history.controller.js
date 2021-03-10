const db = require('../config/db.config.js');
const History = db.History;

exports.create = (req,res) => {
    History.create({
        patient_id: req.body.patient_id,
        blood_pressure:req.body.blood_pressure
    }).then(user => {
        res.status(200).send('OK');
    }).catch(err => {
        res.status(500).send(err);
    })
}

