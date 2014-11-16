var jsdom = require("jsdom");
var parsedMatchFactory = require('./parsedMatchFactory.js');
var updateMatches = require('./DBadder');


var parse = function(date){

  var day = date.getDate().toString();
  var month = (date.getMonth()+1).toString();

  if (day.length === 1){
    day = "0" + day;
  }

  if (month.length === 1){
    month = "0" + this.month;
  }

  datetoparse = day + "-" + month;
  console.log("parsing : "+ datetoparse);
	jsdom.env({
  		url: "http://www.xscores.com/soccer/livescores/" + datetoparse,
  		scripts: ["http://code.jquery.com/jquery.js"],
  

  		done: function (errors, window) {
    		var $ = window.$;
    		table = $(".scoretable");
    		rows = table.find("tr");
    		result = [];


    		for (var i = 2; i<rows.length-2; i++){

		    	var cells = rows.eq(i).find("td");

		    	
		    	
    			    	
    			var match = parsedMatchFactory(cells , date);
    			if (match){
    				result.push(match);
    			}
    	   		
    	
    			
    		}

        if (result.length>0){
          updateMatches(result);
        }
      


  		}
	});

};






module.exports = parse;