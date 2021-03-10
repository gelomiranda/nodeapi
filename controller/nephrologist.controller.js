const db = require('../config/db.config');
const Nephrologist = db.Nephrologist;
const Patient = db.Patient;

exports.create = (req,res) => {
    Nephrologist.create(req.body)
    .then(user => {
        res.status(200).send('Ok');
    }).catch(err => {
        res.status(500).send(err);
    });
}

exports.update = (req, res) => {
    const id = req.params.treatmentId;
    Treatment.update(req.body, {
      where: { id: id }
    }).then(num => {
    if (num == 1) {
        res.send({
            message: "Treatment record was updated successfully."
        });
    } else {
        res.send({
            message: `Cannot update treatment record with id=${id}. Maybe Treatment was not found or req.body is empty!`
        });
    }
    })
    .catch(err => {
    res.status(500).send({
        message: err
    });
    });
};

exports.findAll = (req, res) => {
  //const id = req.params.treatmentId;
  Nephrologist.findAll({
      include: Patient
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving treatment with id=" + id
      });
  });
};

exports.findById = (req, res) => {
    const id = req.params.treatmentId;
    Treatment.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving treatment with id=" + id
        });
    });
};

exports.findByPatient = (req, res) => {
    const id = req.params.patientId;
    Patient.findOne({
        where: {
          id: id
        },
        include: Treatment
    }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving treatment with id=" + id
        });
    });
};