// require & get keys
require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");


var command = process.argv[2];
var input = process.argv.slice(3).join(" ");


function switchIt(){
    switch (command) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this-song":
            spotifyThis();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:    
        console.log("\nGive me a command!\n");
    }
}

switchIt();

function concertThis(){
    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    var data;
    if (input === ""){
        console.log("\n\nEnter a band, please\n\n")
    } else {        
        axios.get(queryUrl)
        .then(function(response){
            data = response.data[0];
            console.log("\n\n" + input + " is playing at " + data.venue.name 
            + "\n" + data.venue.city + ", " + data.venue.country
            + "\non " + moment(data.datetime).format("MM/DD/YYYY") + "\n\n");
        })
    }
};

function movieThis(){
    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
    var data;
    axios.get(queryUrl)
    .then(function(response){
        data = response.data
        if (input === ""){
            console.log("\n\nIf you haven't watched 'Mr. Nobody,' then you probably should\nhttp://www.imdb.com/title/tt0485947/\nIt's on Netflix!\n\n");
        } else {
            //console.log(data);
            console.log("\n\nMovie title: " + data.Title 
            + "\nYear: " + data.Year
            + "\nIMDB rating: " + data.imdbRating
            + "\nRotten Tomatoes rating: " + data.Ratings[1].Value
            + "\nProduced in: " + data.Country
            + "\nLanguage: " + data.Language
            + "\nPlot: " + data.Plot
            + "\nActors: " + data.Actors + "\n\n");
        }
    })
};

function spotifyThis(){
    var data;
    if (input === ""){
        input = "Free Bird";
        songSearch();
    } else {
        songSearch();
    }
    function songSearch(){
        spotify.search({type: "track", query: input})
        .then(function(response){
            data = response.tracks.items[0];
            //console.log(data);
            console.log("\n\nArtist: " + data.album.artists[0].name
            + "\nSong: " + data.name
            + "\nLink to song: " + data.album.external_urls.spotify
            + "\nAlbum: " + data.album.name + "\n\n");
        })
    }
}

function doWhatItSays(){
    fs.readFile("random.txt", "utf8", function(error, data){
        var arrData = data.split(", ");
        command = arrData[0];
        input = arrData[1];
        console.log("\n\n" + command + " " + input);
        
        switchIt();
    });
}

