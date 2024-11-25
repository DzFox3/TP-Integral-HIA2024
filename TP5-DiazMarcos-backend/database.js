const mongoose = require("mongoose");
const URI =
  process.env.MONGO_URI ||
  "mongodb://mongo1,mongo2,mongo3:27017/tp5db?replicaSet=myReplicaSet";
//const URI = "mongodb://0.0.0.0/tp5db";
mongoose
  .connect(URI)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
module.exports = mongoose;
