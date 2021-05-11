const db = require('../config/db.config');
const Item = db.Item;
const ItemHistory = db.ItemHistory;

exports.create = (req,res) => {
  return db.sequelize.transaction(function (t) {
      return Item.create(req.body,{transaction: t})
        .then(function (item) {
          return ItemHistory.create({
            "itemId" : item.id,
            "activity" : "Initial Commit",
            "previous_quantity" : 0
          },{transaction: t})
          .then(function(history){
            res.status(200).send('ok');
          })
        }).catch(error => {
          res.status(500).send(error);
        });
  });
}

exports.findById = (req, res) => {
  const id = req.params.itemId;
  Item.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err
      });
  });
};

exports.findIncludedInPackage = (req, res) => {
  Item.findAll({
      where : {
        include_in_package : 'Yes'
      }
    }).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
  });
};

exports.delete = (req, res) => {
  const id = req.params.itemId;
  Item.destroy({
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


exports.findAll = (req, res) => {
    Item.findAll()
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

exports.update = (req, res) => {
  const id = req.params.itemId;
  Item.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
          res.send({
              message: "Item record was updated successfully."
          });
      } else {
          res.send({
              message: `Cannot update Item with id=${id}. Maybe Item was not found or req.body is empty!`
          });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err
      });
    });
};
