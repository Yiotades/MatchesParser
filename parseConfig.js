var acceptedLeagues = {};
var acceptedStatus = ["Fin" , "Sched" , "2 HF", "1 HF", "H/T"];
var DBurl = 'mongodb://localhost:3001/meteor';

acceptedCountries = ['GREECE', 'ENGLAND', 'SPAIN', 'EUROPE (UEFA)', 'ITALY', 'GERMANY'];
acceptedLeagues = ['PREMIER LEAGUE','PRIMERA DIVISION', 'SERIE A' , 'BUNDESLIGA', 'SUPER LEAGUE'];
acceptedCups = ['FA CUP', 'UEFA CHAMPIONS LEAGUE', 'UEFA EUROPA LEAGUE', 'EURO 2016 FRANCE'];





module.exports = {
	acceptedCountries: acceptedCountries,
	acceptedCups: acceptedCups,
	acceptedLeagues: acceptedLeagues,
	acceptedStatus: acceptedStatus,
	DBurl: DBurl
};


