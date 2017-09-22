var age = parseInt(process.argv[2]);
var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function(err,db){
	if(err){return err}
	var collection = db.collection('parrots');
	collection.count({
        age: { $gt: age }
      }, function(err,count){
		  if(err){return err}
		console.log(count);
		db.close();
	  });
});