const router = require('express').Router();
const db = require('../../models/');

router.route('/').get((req, res) => {
    db.Customer.find({})
        .then(customer => res.json(customer))
        .catch(err => res.status(400).json('Error: ' + err));
    });

// //Add new invenotory item to database
// router.route('/add').post((req, res) => {
//     const name = req.body.name;
//     const password = req.body.password;
//     const make = req.body.make;
//     const model = req.body.model;
//     const vin = req.body.vin;
//     const service = req.body.service;
//     const notes = req.body.notes;
//     const admin = req.body.admin
//     const newInventory = new Inventory({
//         name,
//         password,
//         make,
//         model,
//         vin,
//         service,
//         notes,
//         admin,
//     });
//     newInventory.save()
//         .then(() => res.json(400).json('Error: ' + err));
// });

// //Delete an inventory item
// router.route('/id').delete((req, res) => {
//     inventory.findById(re.params.id)
//         .then(() => res.json('Customer deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// //Modify current inventory item
// router.route('/update/:id').post(() => {
//     customers.findById(req.params.id)
//         .then(inventory => {
//             customer.partnumber = req.body.partnumber;
//             customer.name = req.body.name;
//             customer.max = req.body.max;
//             customer.min = req.body.min;
//             customer.notes = req.body.notes;
//             customer.save()
//                 .then(() => res.json('Customer item updated.'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.json(400).json('Error: ' + err));
// });

module.exports = router;