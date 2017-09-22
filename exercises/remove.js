var url = 'mongodb://localhost:27017/'+process.argv[2];
var col = process.argv[3];
var id = process.argv[4];
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function(err,db){
	if(err){return err}
	var collection = db.collection(col);
	collection.remove({
		_id: id
	}, function(err, data){
		if(err){return}
		db.close();
	});
	
});

