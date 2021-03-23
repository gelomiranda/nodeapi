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
    const id = req.params.id;
    Nephrologist.update(req.body, {
      where: { id: id }
    }).then(num => {
    if (num == 1) {
        res.send({
            message: "Nephrologist record was updated successfully."
        });
    } else {
        res.send({
            message: `Cannot update Nephrologist record with id=${id}. Maybe Nephrologist was not found or req.body is empty!`
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
    const id = req.params.id;
    Nephrologist.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving treatment with id=" + id
        });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Nephrologist.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res
          .status(200)
          .send({
          message: "Item was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Item with id=${id}. Maybe Item was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Item with id=" + id
      });
    });
};

// exports.findByPatient = (req, res) => {
//     const id = req.params.id;
//     Nephrologist.findOne({
//         where: {
//           id: id
//         }
//     }).then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error retrieving treatment with id=" + id
//         });
//     });
// };