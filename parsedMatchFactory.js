var ParsedMatch = require('./ParsedMatch.js');
var parseConfig = require('./parseConfig.js');


var parsedMatchFactory = function(cells, date){
	var leagueData = getLeagueData(cells);
	
	if (leagueData && isInAcceptedLeagues(leagueData) && isNotCancelled(cells.eq(1).text())){
		//console.log(leagueData.league + ' ' + leagueData.country + ' ' + isInAcceptedLeagues(leagueData)+ ' ' + isNotCancelled(cells.eq(1).text()));
		return new ParsedMatch(cells, leagueData , date);
	}else {
		return null;
	}


}










var getLeagueData = function(cells){
	var onclickString = cells.eq(4).find("a").attr("onclick");
	if (onclickString){
		var parametersString = onclickString.substring(onclickString.indexOf("(") + 1, onclickString.lastIndexOf(")"));
		var parameters = parametersString.split(",");
		
		var leagueData = {
			league: parameters[1].substring(1,parameters[1].length -1),
			country: parameters[2].substring(1,parameters[2].length -1),
			cup: parameters[5].substring(1,parameters[5].length -1)

		}
		//console.log(leagueData.league + " " + leagueData.country);
		return leagueData;
	}else{
		return null;
	}

};


var isNotCancelled = function(status){

	if (parseConfig.acceptedStatus.indexOf(status) > -1){
		return true;
	}else{
		return false;
	}
};

var isInAcceptedLeagues = function(leagueData){
	if (parseConfig.acceptedCountries.indexOf(leagueData.country) > -1){
		if ((parseConfig.acceptedLeagues.indexOf(leagueData.league) > -1)||(parseConfig.acceptedCups.indexOf(leagueData.cup) > -1)){
			return true;
		}
	}
	
	return false;
};


module.exports = parsedMatchFactory;