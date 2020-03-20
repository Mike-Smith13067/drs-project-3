const express = require ("express");
const mongoose = require ("mongoose");
const app = express ();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const inventoryRouter = require('./routes/inventory/inventory');
app.use('/inventory', inventoryRouter)

const customerRouter = require('./routes/customer/customer');
app.use('/customer', customerRouter)

const workorderRouter = require('./routes/workorder/workorder');
app.use('/workorder', workorderRouter)

// const apiroutes = require("./routes/apiroutes")
// apiroutes(app)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/drs-automotive")
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo database connection successful")
});

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
})

