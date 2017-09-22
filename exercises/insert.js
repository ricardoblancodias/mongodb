var firstName = process.argv[2];
var lastName = process.argv[3];
var obj = {firstName: firstName, lastName: lastName};
var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function(err, db){
  if(err){return err}
   var collection = db.collection('docs');
   collection.insert({
      obj
   });
   console.log(JSON.stringify(obj));
   db.close();
});