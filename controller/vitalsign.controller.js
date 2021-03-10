const db = require('../config/db.config.js');
const VitalSign = db.VitalSign;

exports.create = (req,res) => {
    
    VitalSign.create({
        patient_id: req.body.patient_id,
        blood_pressure_systolic:req.body.blood_pressure_systolic,
        blood_pressure_diastolic:req.body.blood_pressure_diastolic,
        temperature:req.body.temperature,
        respiratory_rate:req.body.respiratory_rate,
        heart_rate:req.body.heart_rate
    }).then(user => {
        res.status(200).send('Ok');
    }).catch(err => {
        res.status(500).send(err);
    })
}


exports.update = (req, res) => {
    const id = req.params.patientId;
    VitalSign.update(req.body, {
        where: { 
                id: id,
                patient_id: req.body.patient_id 
            }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Tutorial was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err
        });
    });
};