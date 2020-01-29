const orm = require("../db/config/orm");

const burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", callback);
  },
  insertOne: function(dto, callback) {
    orm.insertOne("burgers", dto, callback);
  },
  updateOne: function(values, condition, callback){
      orm.updateOne('burgers', values, condition, callback);
  }
};

module.exports = burger;
