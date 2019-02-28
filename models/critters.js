var orm = require("../config/orm.js");

var critter = {
  selectAll: function(cb) {
    orm.selectAll("critters", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("critters", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("critters", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteOne: function(condition, cb) {
    orm.deleteOne("critters", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = critter;
