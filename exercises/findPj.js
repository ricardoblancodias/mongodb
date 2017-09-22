var age = parseInt(process.argv[2]);
var url = 'mongodb://localhost:27017/learnyoumongo';

var mongo = require('mongodb').MongoClient;
    mongo.connect(url, function(err, db) {
      if(err){return err}
      // db gives access to the database
      var collection = db.collection('parrots');
      collection.find({
        age: { $gt: age }
      }, {_id: 0,}).toArray(function(err, docs){
        if(err){return err};
        console.log(docs);
      });
      db.close();
    });

/* OFFICIAL SOLUTION

    var mongo = require('mongodb').MongoClient
    var age = process.argv[2]
    
    var url = 'mongodb://localhost:27017/learnyoumongo'
    
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var parrots = db.collection('parrots')
      parrots.find({
        age: {
          $gt: +age
        }
      }, {
        name: 1
      , age: 1
      , _id: 0
      }).toArray(function(err, docs) {
        if (err) throw err
        console.log(docs)
        db.close()
      })
    })
*/