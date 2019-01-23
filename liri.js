require("dotenv").config();

const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const axios = require("axios");
const moment = require("moment");

const spotify = new Spotify(keys.spotify);

const liriRequest = process.argv[2];

// if (process.argv[2] === "concert-this") {
//     let artist = process.argv.slice(3).join(" ");
//     axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response) {
//         console.log("Name of venue: " + response.data.venue.name);
//         console.log("Location: " + response.data.venue.city + ", " + response.data.venue.region + " " + response.data.venue.country);
//         console.log("Date of Event: " + moment(response.data.datetime).format('MM/DD/YYYY'));
//     });
// } else if (process.argv[2] === "movie-this" && process.argv[3] != null) {
//     let movie = process.argv.slice(3).join(" ");
//     axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(function(response) {
//         console.log("Title: " + response.data.Title);
//         console.log("Release Year: " + response.data.Year);
//         console.log("IMDB Rating: " + response.data.imdbRating);
//         console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
//         console.log("Country: " + response.data.Country);
//         console.log("Language: " + response.data.Language);
//         console.log("Plot: " + response.data.Plot);
//         console.log("Cast: " + response.data.Actors);
//     });
// } else if (process.argv[2] === "movie-this" && process.argv[3] == null) {
//     let movie = "Mr. Nobody";
//     axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(function(response) {
//         console.log("Title: " + response.data.Title);
//         console.log("Release Year: " + response.data.Year);
//         console.log("IMDB Rating: " + response.data.imdbRating);
//         console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
//         console.log("Country: " + response.data.Country);
//         console.log("Language: " + response.data.Language);
//         console.log("Plot: " + response.data.Plot);
//         console.log("Cast: " + response.data.Actors);
//     });

// }

//function to run movie-this
function movie() {
    let searchMovie = process.argv.slice(3).join(" ");
    if (searchMovie) {
        axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);
        });                        
    } else {
        let movie = "Mr. Nobody";
        axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);
        });
    }
}

//function to run concert-this
function concert() {
    let artist = process.argv.slice(3).join("+");
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response) {
        for (let i = 0; i < response.data.length; i++) {
            console.log("Name of Venue: " + response.data[i].venue.name);
            console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + " " + response.data[i].venue.country);
            console.log("Date of Event: " + moment(response.data[i].datetime).format('MM/DD/YYYY'));

        }

    });
}

function music() {
    let song = process.argv.slice(3).join(" ");
    if (song) {
        spotify.search({type: 'track', query: song}, function(err, data) {
            if (err) {
                 return console.log(err);
            }
                console.log("Artist: " + data.tracks.items[0].artists[0].name);
                console.log("Song Name: " + data.tracks.item[0].name);
                console.log("Preview Link: " + data.tracks.item[0].preview_url);
                console.log("Album: " + data.tracks.item[0].album.name);
            
        });
    } else {
        let song = "The Sign";
        spotify.search({type: 'track', query: song}, function(err, data) {
            if (err) {
                 return console.log(err);
            }
                console.log("Artist: " + data.tracks.items[0].artists[0].name);
                console.log("Song Name: " + data.tracks.item[0].name);
                console.log("Preview Link: " + data.tracks.item[0].preview_url);
                console.log("Album: " + data.tracks.item[0].album.name);
            
        });

    }
}

function doWhatItSays() {

}


switch(liriRequest) {
    case "movie-this":
        movie();
    case "concert-this":
        concert();
    case "spotify-this-song":
        music();
    case "do-what-it-says":
        doWhatItSays();
    default:
        return undefined;
}