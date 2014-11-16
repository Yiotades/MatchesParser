var parse = require('./parse.js');

var parseWeek = function(startdate){
	for(var i=0; i<7; i++){
		var datetoparse = new Date(startdate.getTime() + i*24*60*60*1000);
		console.log(datetoparse);
		setTimeout(parse, i*60*1000,datetoparse);

	}

}


module.exports = parseWeek;