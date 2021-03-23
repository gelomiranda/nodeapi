const db = require('../config/db.config');
const ItemHistory = db.ItemHistory;

exports.create = (req,res) => {
    ItemHistory.create(req.body)
    .then(user => {
        res.status(200).send('Oks');
    }).catch(err => {
        res.status(500).send(err);
    });
}

exports.findById = (req, res) => {
  const id = req.params.itemId;
  ItemHistory.findAll({
    where:{
        itemId : id
        }
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
  });
};

// exports.findIncludedInPackage = (req, res) => {
//   Item.findAll({
//       where : {
//         include_in_package : 'Yes'
//       }
//     }).then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Tutorial with id=" + id
//       });
//   });
// };

// exports.delete = (req, res) => {
//   const id = req.params.itemId;
//   Item.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res
//           .status(200)
//           .send({
//           message: "Item was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Item with id=${id}. Maybe Item was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Item with id=" + id
//       });
//     });
// };


// exports.findAll = (req, res) => {
//     Item.findAll()
//       .then(data => {
//         res.status(200).send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials."
//         });
//       });
// };

// exports.update = (req, res) => {
//   const id = req.params.itemId;
//   Item.update(req.body, {
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//           res.send({
//               message: "Item record was updated successfully."
//           });
//       } else {
//           res.send({
//               message: `Cannot update Item with id=${id}. Maybe Item was not found or req.body is empty!`
//           });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: err
//       });
//     });
// };
