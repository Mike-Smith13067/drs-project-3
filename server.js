const express = require ("express");
const mongoose = require ("mongoose");
const morgan = require('morgan');
const app = express ();
const passport = require('passport');
const flash = require('connect-flash');
const PORT = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors());
app.use(morgan("dev"));
app.use(require('express-session')({secret: 'keyboard-cat', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/public")));
}
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const inventoryRouter = require('./routes/inventory/inventory');
app.use('/inventory', inventoryRouter)

const customerRouter = require('./routes/customer/customer');
app.use('/customer', customerRouter)

const workorderRouter = require('./routes/workorder/workorder');
app.use('/workorder', workorderRouter)

const authRouter = require('./routes/authRouter');
app.use('/auth', authRouter);

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

