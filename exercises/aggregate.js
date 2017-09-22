var size = parseInt(process.argv[2]);
var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient;

mongo.client(url, function(err,db){
	if(err){return err}
	var collection = db.collection('prices');
	collection.aggregate([
      { $match: { status: size }}
    , { $group: {
        _id: 'average' // This can be an arbitrary string in this case
      , total: {
          // $sum is the operator used here
          $avg: '$price'
        }
      }}
    ]).toArray(function(err,results){
		var average = results[0].average;
		console.log(Number(average).toFixed(2));
		db.close();
	});
});