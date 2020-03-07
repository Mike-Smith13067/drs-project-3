var db = require("../models")
function apiroutes(app) {

     app.get("/api/customers", function(req, res) {
         db.Customer.find({}).then(function(data) {
            res.json(data)
         }).catch(function(err) {
             res.json(err);
         });
        
     });

     app.get("/api/customers/:id", function(req, res) {
        db.Customer.findOne({_id: req.params.id}).then(function(data) {
           res.json(data)
        }).catch(function(err){
            res.json(err);
        });
       
    });

    app.delete("/api/customers/delete/:id", function(req, res) {
        db.Customer.findOneAndRemove({_id:req.params.id}).then(function(data) {
           res.json(data)
        }).catch(function(err){
            res.json(err);
        });
       
    });
}

module.exports = apiroutes