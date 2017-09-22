var db = process.argv[2];
var url = 'mongodb://localhost:27017/'+db;
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function(err, db){
  if(err){return err}
   var collection = db.collection('docs');
   collection.update({
      username: 'tinatime'
   }, {
     $get:{
     age: 40
   }
   });
  db.close();
});