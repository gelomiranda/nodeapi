const db = require('../config/db.config.js');
const BillingDetail = db.BillingDetail;

exports.create = (req,res) => {
    BillingDetail.bulkCreate(req.body)
    .then(BillingDetail => {
        
        res.send(req.body);
    }).catch(err => {
        res.status(500).send(err);
    })
}


exports.findAll = (req, res) => {
    BillingDetail.findAll()
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



