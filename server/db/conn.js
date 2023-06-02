
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');

const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("employees");
        console.log("Successfully connected to MongoDB."); 
        // Pasar la instancia de MongoClient a Mongoose
        mongoose.connect(Db,{
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Mongoose Working!");
      }
      return callback(err);
         });
  },

  getDb: function () {
    return _db;
  },
};
