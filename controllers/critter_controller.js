var express = require("express");

var router = express.Router();

// Import the model 
var critter = require("../models/critters.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  critter.selectAll(function(data) {
    var hbsObject = {
      critters: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/critters", function(req, res) {
  critter.insertOne([
    "critter", "free"
  ], [
    req.body.critter, req.body.free
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/critters/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  critter.updateOne({
    free: req.body.free
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/critters/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  critter.deleteOne(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
