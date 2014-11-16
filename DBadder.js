var MongoClient = require('mongodb').MongoClient
  , assert = require('assert'),
    _=require('underscore');


// Connection URL
var url = require('./parseConfig.js').DBurl ;

var updateMatches = function(matches){

	MongoClient.connect(url, function(err, db) {

  		assert.equal(null, err);

  		var collection = db.collection('matches');
  		var matcheslength = matches.length;

		for (var i =0; i< matcheslength ; i++){
			var matchcreteria = {hometeam : matches[i].hometeam,
								awayteam: matches[i].awayteam,
								time: matches[i].time};


			var updatedMatches = 0;
			var adderfunction = (function(match){
				return function(err,doc){
					if (doc){

						collection.update({_id: doc._id}, {$set: match} , function(err,result){
							updatedMatches++;
							if (updatedMatches === matcheslength){
								db.close();
							};


						})

					}else{

						_.extend(match, {bets:{hometeam:0,draw:0,awayteam:0}, evaluated:false});
						collection.insert( match ,{} , function(err,result){
							updatedMatches++;
							if (updatedMatches === matcheslength){
								db.close();
							};


						})
					}
				}
			})(matches[i]);

			collection.findOne(matchcreteria,{}, adderfunction);
		}
 
	});

};

module.exports = updateMatches;