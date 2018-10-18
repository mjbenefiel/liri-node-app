<h1>Liri Node App</h1>


<hr></hr>

Author: Michael Benefiel

Feel free to use some or all of this code if you're trying to complete a similar project.
<hr></hr>

<h3> App screenshot </h3>

![alt text](https://github.com/mjbenefiel/liri-node-app/blob/master/gif/liriappdemo.gif "Liri Node App")

<hr></hr>

<h2> Project overview</h2>
LIRI is a command line Node app that takes in parameters and returns data from the following APIs: Bandsintown, Spotify and OMDB
<hr></hr>

<h2> How it works </h2>
Type into the command line....
<p></p>
node liri.js concert-this <artist/band name here> to return concert information from Bandsintown. 

node liri.js spotify-this-song <song name here> to return song information from Spotify. If no song is entered, a hard coded default song will return.
  
node liri.js movie-this <movie name here> to return movie information from OMDB. If no movie is entered, a hard coded default movie will return.
  
node liri.js do-what-it-says to return information stored in random.txt

<hr></hr>

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

- IP
