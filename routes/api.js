const db = require("../models/fav.js");

module.exports = function(app) {
    app.get("/api/saved", function(req, res) {
        db.Fav.find({}, function(err, data) {
            if(data) {() => res.json(data)}
        })
    });
    app.post("/api/saved", function(req, res) {
        console.log(req.body);
        db.Fav.create(req.body);
    });
}