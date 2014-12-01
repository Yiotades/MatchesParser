

function Parser(url){
	
	this.url = url;

}

Parser.prototype.parse = require('./parse.js');

Parser.prototype.parseweek = function(startdate){
	for(var i=0; i<7; i++){
		var datetoparse = new Date(startdate.getTime() + i*24*60*60*1000);
		setTimeout(this.parse, i*60*1000,datetoparse);

	}

}

module.exports = Parser;
