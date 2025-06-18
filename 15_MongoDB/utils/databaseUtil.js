const mongo = require('mongodb')

const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://root:root@santhoshkumar.gdeqetq.mongodb.net/?retryWrites=true&w=majority&appName=SanthoshKumar"

let _db;

const mongoConnect = (callback)=>{
  MongoClient.connect(MONGO_URL)
  .then(client=>{
    console.log("Connected to mongoDB");
    _db = client.db("airbnb");
    callback()
  }).catch(err=>{
    console.log(err)
    throw err;
  })
}

const getDb = () =>{
  if(!_db){
    throw new Error("Database not connected")
  }
  return _db
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

