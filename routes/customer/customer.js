const router = require('express').Router();
const db = require('../../models/');

//Get all customers
router.route('/all').get((req, res) => {
    db.Customer.find({})
        .then(customer => res.json(customer))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Create new customer
router.route('/create').post((req, res) => {
    db.Customer.create({ ...req.body }).then(function (data) {
        res.json(data)
    }).catch(function (err) {
        res.json(err);
    });

});

//Add new customer to database
router.route('/add').post((req, res) => {
    db.Customer.create(req.user._id)
        .then(customer => res.json([customer]))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get a customer by id (email)
router.route('/update/:id').get((req, res) => {
    db.Customer.findOne({ email: req.body.email })
        .then(function (data) {
            res.json(data)
                .then(() => req.json(400).json('Error: ' + err));
            
        })

});

//Delete a customer
router.route('/customer/delete/:id"').get((req, res) => {
    db.Customer.findOneAndRemove({ _id: req.params.id }).then(function (data) {
        res.json(data)
    }).catch(function (err) {
        res.json(err);
    });

});

//Modify/update a customer

router.route('/customers/delete/:id"').get((req, res) => {
    db.Customer.findOneAndUpdate({ _id: req.params.id }).then(function (data) {
        res.json(data)
    }).catch(function (err) {
        res.json(err);
    });

});



module.exports = router;