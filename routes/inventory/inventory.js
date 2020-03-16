const router = require('express').Router();
let Inventory = require('../../models/inventory');

//Get all inventory from mongo
router.route('/').get((req, res) => {
    Inventory.find()
        .then(inventory => res.json(inventory))
        .catch(err = res.status(400).json('Error: ' + err));
});

//Add new invenotory item to database
router.route('/add').post((req, res) => {
    const partnumber = req.body.partnumber;
    const name = req.body.name;
    const max = req.body.max;
    const min = req.body.min;
    const notes = req.body.notes;
    const newInventory = new Inventory({
        partnumber,
        name,
        max,
        min,
        notes,
    });
    newInventory.save()
        .then(() => res.json(400).json('Error: ' + err));
});

//Delete an inventory item
router.route('/id').delete((req, res) => {
    Inventory.findById(re.params.id)
        .then(() => res.json('Inventory item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Modify current inventory item
router.route('/update/:id').post(() => {
    Inventory.findById(req.params.id)
        .then(inventory => {
            inventory.partnumber = req.body.partnumber;
            inventory.name = req.body.name;
            inventory.max = req.body.max;
            inventory.min = req.body.min;
            inventory.notes = req.body.notes;
            inventory.save()
                .then(() => res.json('Inventory item updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.json(400).json('Error: ' + err));
});

module.exports = router