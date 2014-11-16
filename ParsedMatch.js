function ParsedMatch(cells, leagueData, date){
	this.time = this.getTime(cells.eq(0).text() , date);
	this.status = cells.eq(1).text();
	this.betable = this.isBetable(this.status);
	this.league = leagueData.league;
	this.country = leagueData.country;
	this.hometeam = cells.eq(5).text();
	this.awayteam = cells.eq(9).text();
	this.homescore;
    this.awayscore;
    this.result;
	var score = cells.eq(14).text();
	this.setScore(score);

}

ParsedMatch.prototype.toString = function() {
    return this.time + '-'+ this.status + '-' + this.league + '--' + this.hometeam + '-' + this.awayteam + '--' + this.homescore + '-' + this.awayscore;
};




ParsedMatch.prototype.setScore = function(score) {
    
    if (score){
    	var scoreArray = score.split("-");
    	this.homescore = scoreArray[0];
    	this.awayscore = scoreArray[1];
    	if (this.homescore > this.awayscore){
    		this.result = "1";
    	}else if(this.homescore === this.awayscore){
    		this.result = "X";
    	}else{
    		this.result = "2";
    	}

    }
};


ParsedMatch.prototype.isBetable = function(statString) {
	if (statString === 'Sched'){
		return true;
	}else{
		return false;
	}
};



ParsedMatch.prototype.getTime = function(timeString, date){
	
	var day = date.getDate();
	var month = date.getMonth();
	var hourMin = timeString.split(":");
	var hour = parseInt(hourMin[0]) - 2;
	var min = parseInt(hourMin[1]);
	var year = new Date().getFullYear();

	return new Date(Date.UTC(year, month, day , hour , min, 0, 0));
};

module.exports = ParsedMatch

