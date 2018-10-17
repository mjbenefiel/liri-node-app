//COMMANDS: concert-this, spotify-this-song, movie-this, do-what-it-says

require("dotenv").config();
let fs = require("fs");
let request = require('request');

let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);

let chalk = require('chalk');

let command = process.argv[2];
let parameter = process.argv[3];




function switchCase() {

  switch (command) {

    case 'concert-this':
      bandsInTown(parameter);                   
      break;                          

    case 'spotify-this-song':
      spotifySong(parameter);
      break;

    case 'movie-this':
      omdbInfo(parameter);
      break;

    case 'do-what-it-says':
      getRandom();
      break;

      default:                            
      display("Invalid. Does not compute. Self-destructing in 3..2..1..");
      break;

  }
};

//BANDS IN TOWN

function bandsInTown(parameter){

if ('concert-this')
{
	var artist="";
	for (var i = 3; i < process.argv.length; i++)
	{
		artist+=process.argv[i];
	}
	console.log(artist);
}
else
{
	artist = parameter;
}



var queryUrl = "https://rest.bandsintown.com/artists/"+ artist +"/events?app_id=codingbootcamp";


request(queryUrl, function(error, response, body) {

  if (!error && response.statusCode === 200) {

    var JS = JSON.parse(body);
    for (i = 0; i < JS.length; i++)
    {
      var dateTime = JS[i].datetime;
        var month = dateTime.substring(5,7);
        var year = dateTime.substring(0,4);
        var day = dateTime.substring(8,10);
        var dateForm = month + "/" + day + "/" + year
  
      display(chalk.green("\n---------------------------------------------------\n"));
      display(chalk.blue("Date: " + dateForm));
      display(chalk.blue("Name: " + JS[i].venue.name));
      display(chalk.blue("City: " + JS[i].venue.city));
      if (JS[i].venue.region !== "")
      {
        display(chalk.blue("Country: " + JS[i].venue.region));
      }
      display(chalk.blue("Country: " + JS[i].venue.country));
      display(chalk.green("\n---------------------------------------------------\n"));

    }
  }
});
}

//SPOTIFY

function spotifySong(parameter) {


  var searchTrack;
  if (parameter === undefined) {
    searchTrack = "Ace of Base The Sign";
  } else {
    searchTrack = parameter;
  }

  spotify.search({
    type: 'track',
    query: searchTrack
  }, function(error, data) {
    if (error) {
      display('Error recorded: ' + error);
      return;
    } else {
      display(chalk.green("\n---------------------------------------------------\n"));
      display(chalk.blue("Artist: " + data.tracks.items[0].artists[0].name));
      display(chalk.blue("Song: " + data.tracks.items[0].name));
      display(chalk.blue("Preview: " + data.tracks.items[3].preview_url));
      display(chalk.blue("Album: " + data.tracks.items[0].album.name));
      display(chalk.green("\n---------------------------------------------------\n"));
      
    }
  });
};

//OMDB

function omdbInfo(parameter) {


  var findMovie;
  if (parameter === undefined) {
    findMovie = "Mr. Nobody";
  } else {
    findMovie = parameter;
  };

  var queryUrl = "http://www.omdbapi.com/?t=" + findMovie + "&y=&plot=short&apikey=trilogy";
  
  request(queryUrl, function(err, res, body) {
  	var bodyOf = JSON.parse(body);
    if (!err && res.statusCode === 200) {
      display(chalk.green("\n---------------------------------------------------\n"));
      display(chalk.blue("Title: " + bodyOf.Title));
      display(chalk.blue("Release Year: " + bodyOf.Year));
      display(chalk.blue("IMDB Rating: " + bodyOf.imdbRating));
      display(chalk.blue("Rotten Tomatoes Rating: " + bodyOf.Ratings[1].Value)); 
      display(chalk.blue("Country: " + bodyOf.Country));
      display(chalk.blue("Language: " + bodyOf.Language));
      display(chalk.blue("Plot: " + bodyOf.Plot));
      display(chalk.blue("Actors: " + bodyOf.Actors));
      display(chalk.green("\n---------------------------------------------------\n"));
    }
  });
};

//DO WHAT RANDOM.TXT SAYS

function getRandom() {
fs.readFile('random.txt', "utf8", function(error, data){

    if (error) {
        return display(error);
      }

  
    var dataArr = data.split(",");
    
    if (dataArr[0] === "spotify-this-song") {
        
      var songcheck = dataArr[1].trim().slice(1, -1);
      spotifySong(songcheck);
    } 
   
    });

};

//SEND TO LOG.TXT

function display(dataToLog) {

	console.log(dataToLog);

	fs.appendFile('log.txt', dataToLog + '\n', function(err) {
		
		if (err) return display('Error logging data to file: ' + err);	
	});
}


switchCase();


