require("dotenv").config();

var fs = require('fs');
var request = require("request");
var Spotify = require("node-spotify-api");
var moment = require("moment");


var spotify = new Spotify(keys.spotify);


