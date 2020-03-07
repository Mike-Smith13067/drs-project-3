var db = require("../models")
function apiroutes(app) {

     app.get("/api/customers", function(req, res) {
         console.log("test")
         db.Customer.find({}).then(function(data) {
            res.json(data)
         })
        
     })
}

module.exports = apiroutes