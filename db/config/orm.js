const connection = require("./connection.js");

const orm = {
  selectAll: function(tableName, callback) {
    connection.query("SELECT * FROM " + tableName, function(
      err,
      results,
      fields
    ) {
      if (err) throw err;
      callback(results);
    });
  },
  insertOne: function(tableName, dto, callback) {
    connection.query("INSERT INTO " + tableName + " SET ?", dto, function(
      err,
      results,
      fields
    ) {
      if (err) throw err;
      callback(results);
    });
  },
  updateOne: function(tableName, values, condition, callback) {
    connection.query(
      "UPDATE " + tableName + " SET ? WHERE ?",
      [values, condition],
      function(err, results, fields) {
        if (err) throw err;
        callback(results);
      }
    );
  }
};

module.exports = orm;
