var express = require ("express");
var mongoose = require ("mongoose");
var app = express ();
var PORT = process.env.PORT || 3001;

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


var apiroutes = require("./routes/apiroutes")
apiroutes(app)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/drs-automotive")

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
} )