const db = require('../config/db.config.js');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Patient = db.Patient;

exports.create = (req,res,next) => {
    Patient.create(req.body).then(patient => {
        res.status(200).send(patient);
    }).catch(function(error){
        res.status(500).json({error:error.message});
    });
}

exports.findAll = (req, res) => {
    Patient.findAll()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

exports.findById = (req, res) => {
    const id = req.params.patientId;
    Patient.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.patientId;
    Patient.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
            res.send({
                message: "Patient record was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
        }
      })
      .catch(err => {
        res.send(err)
      });
};

exports.delete = (req, res) => {
    const id = req.params.patientId;
    Patient.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res
            .status(200)
            .send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
};


exports.findByName = (req, res) => {
  const id = req.params.patientId;
  Patient.findAll({
    where: { 
      first_name: {
        [Op.like]: req.params.patientName + '%'
      } 
    }
    }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
    });
};
