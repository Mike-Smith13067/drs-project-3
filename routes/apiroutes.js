// var db = require("../models")
// function apiroutes(app) {

//     // Customer routes

//      app.get("/api/customers", function(req, res) {
//          db.Customer.find({}).then(function(data) {
//             res.json(data)
//          }).catch(function(err) {
//              res.json(err);
//          });
        
//      });



//      app.post("/api/customers", function(req, res) {
//         db.Customer.insert({}).then(function(data) {
//             res.json(data)
//         }).catch(function(err) {
//             res.json(err);
//         });
//     });

//      app.get("/api/customers/:id", function(req, res) {
//         db.Customer.findOne({_id: req.params.id}).then(function(data) {
//            res.json(data)
//         }).catch(function(err){
//             res.json(err);
//         });
       
//     });




//     // Admin routes

//     app.get("/api/admin", function(req, res) {
//         db.Admin.find({}).then(function(data) {
//            res.json(data)
//         }).catch(function(err){
//             res.json(err);
//         });
       
//     });
    
//     app.get("/api/admin", function(req, res) {
//         db.Admin.find({_id: req.params.id}).then(function(data) {
//            res.json(data)
//         }).catch(function(err){
//             res.json(err);
//         });
       
//     });

//     // Inventory routes

//     // app.get("/api/inventory", function(req, res) {
//     //     db.Inventory.find({}).then(function(data) {
//     //        res.json(data)
//     //     }).catch(function(err) {
//     //         res.json(err);
//     //     });
       
//     // });

//     app.post("/api/inventory", function(req, res) {
//         db.Inventory.create(req.body).then(function(data) {
//            res.json(data)
//         }).catch(function(err) {
//             res.json(err);
//         });
       
//     });

//     // workOrder routes

//     app.get("/api/workorder", function(req, res) {
//         db.workOrder.find({}).then(function(data) {
//            res.json(data)
//         }).catch(function(err) {
//             res.json(err);
//         });
       
//     });

//     app.post("/api/workorder", function(req, res) {
//         db.workorder.find({}).then(function(data) {
//            res.json(data)
//         }).catch(function(err) {
//             res.json(err);
//         });
       
//     });
// }

// module.exports = apiroutes