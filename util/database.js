const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://bacphfx:BunDau2210@cluster0.krh9huz.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db("test");
      cb();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
