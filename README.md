<h1>Liri Node App</h1>


<hr>

Author: Michael Benefiel

Feel free to use some or all of this code if you're trying to complete a similar project.
<hr>

<h3> App screenshot </h3>

![alt text](https://github.com/mjbenefiel/liri-node-app/blob/master/gif/liriappdemo.gif "Liri Node App")

<hr>

<h2> Project overview</h2>
LIRI is a command line Node app that takes in parameters and returns data from the following APIs: Bandsintown, Spotify and OMDB
<hr>

<h2> How it works </h2>
Type into the command line....

- ```node liri.js concert-this "artist/band name here"``` to return concert information from Bandsintown. 

- ```node liri.js spotify-this-song "song name here"``` to return song information from Spotify. If no song is entered, a hard coded default song will return.
  
- ```node liri.js movie-this "movie name here"``` to return movie information from OMDB. If no movie is entered, a hard coded default movie will return.
  
- ```node liri.js do-what-it-says``` to return information stored in random.txt

<hr>

<h2>Technology and packages used</h2>

[Node.js](https://nodejs.org/en/)

[chalk](https://www.npmjs.com/package/chalk)

[figlet](https://www.npmjs.com/package/figlet)

[fs](https://www.npmjs.com/package/fs)

[request](https://www.npmjs.com/package/request)

[Bandsintown API](http://www.artists.bandsintown.com/bandsintown-api)

[OMDB API](http://www.omdbapi.com/)

[Spotify API](https://developer.spotify.com/documentation/web-api/)

<hr></hr>

<h4>Below is a thorough, but not comprehensive, step-by-step process of how I got the app running in terms of code</h4>

- Navigate to root of project. Initialize package.json by running ```npm init -y```

- Creation of .gitignore file

- Creation of keys.js
  - Spotify keys for export

- Creation of .env file to store Spotify API keys

- Creation of random.txt with default result for do-what-it-says command

- Creation of liri.js 

- ```npm install dotenv```

- ```npm install fs```

- ```npm install request```

- ```npm install figlet```

- ```npm install node-spotify-api```

- ```npm install chalk``` 

- declare command line variables (command, parameter)

- switchCase(); switch statement holding:
  - bandsInTown(parameter);
  - spotifySong(parameter)
  - omdbInfo(parameter);
  - getRandom(parameter);
  - display(parameter);

- bandsInTown();
  - declare artist variable as parameter
  - figlet "Bandsintown" for style
  - Send request for concerts to Bandsintown API based off "artist" entered into parameter
  - parse data into readable object
  - return name, city, country and date of concerts
  - Chalk package used for style

- spotifySong();
  - declare searchTrack variable as parameter
  - set undefined parameter
      - return Ace of Base The Sign if no track entered into parameter
    - figlet "Spotify" for style
    - search Spotify API and return artist, song, url preview and album name of song entered in parameter
    - Chalk package used for style

- ombdInfo();
  - set findMovie variable as parameter
  - set undefined parameter
    - return "Mr. Nobody" if no parameter entered"
  - figlet "OMDB" for style
  - Send movie request to OMDB API and return title, release year, IMDB rating, Rotten Tomatoes rating, country, language, plot and actors
  - Chalk package used for style

- getRandom();
  - read and return information in random.txt by utilizing if statement

- display();
  - append information to log.txt

- call switchCase();


