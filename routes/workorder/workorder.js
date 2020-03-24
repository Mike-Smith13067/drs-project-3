const router = require('express').Router();
const db = require('../../models/');

//Get all workorders from mongo
router.route('/').get((req, res) => {
    db.WorkOrder.find({})
        .then(workorder => res.json(workorder))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add new workorder item to database and link to a specific customer
router.route('/add').post((req, res) => {
    console.log(req.user);
    db.Customer.findOne({ email: req.body.email })
        .then(customerObj => {
            if (customerObj) {
                const customer = customerObj._id;
                const type = req.body.type;
                const description = req.body.description;
                const partnumber = req.body.partnumber;
                const qty = req.body.qty;
                const hrs = req.body.hrs;
                const price = req.body.price;
                const rate = req.body.rate;
                const newWorkorder = new Workorder({
                    type,
                    description,
                    partnumber,
                    qty,
                    hrs,
                    price,
                    rate,
                    customer
                });
                newWorkorder.save()
                    .then(() => res.json(400).json('Error: ' + err));
                db.Customer.findOneAndUpdate({ email: req.body.email }, {
                    $push: {
                        workOrders: newWorkerder._id
                    }
                })
            } else {
                res.json(400).json('Error: ' + err);
            }
        })

});

//Modify current workorder item
router.route('/update/:id').post(() => {
    workorder.findById(req.params.id)
        .then(workorder => {
            workorder.type = req.body.type;
            workorder.description = req.body.description;
            workorder.partnumber = req.body.partnumber;
            workorder.qty = req.body.qty;
            workorder.hrs = req.body.hrs;
            workorder.price = req.body.price;
            workorder.rate = req.body.rate;
            workorder.save()
                .then(() => res.json('workorder item updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.json(400).json('Error: ' + err));
});

module.exports = router