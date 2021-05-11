const db = require('../config/db.config');
const Vendor = db.Vendor;

exports.create = (req,res) => {
    Vendor.create(req.body)
    .then(vendor => {
        res.status(200).send('Ok');
    }).catch(err => {
        res.status(500).send(err);
    });
}

exports.update = (req, res) => {
    const id = req.params.id;
    Vendor.update(req.body, {
      where: { id: id }
    }).then(num => {
    if (num == 1) {
        res.send({
            message: "Vendor record was updated successfully."
        });
    } else {
        res.send({
            message: `Cannot update Vendor record with id=${id}. Maybe Nephrologist was not found or req.body is empty!`
        });
    }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.findAll = (req, res) => {
  //const id = req.params.treatmentId;
  Vendor.findAll()
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
    Vendor.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Vendor.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res
          .status(200)
          .send({
          message: "Vendor was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete vendor with id=${id}. Maybe Item was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete vendor with id=" + id
      });
    });
};
