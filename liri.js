require("dotenv").config();

const keys = require("./keys.js");
const axios = require("axios");
const moment = require("moment");


let liriRequest = process.argv[2];

let requestItem = process.argv[3];

switch(liriRequest) {
    case "movie-this":
        if(requestItem == undefined){
            requestItem = "Mr. Nobody";
        } else {
            requestItem = process.argv.slice(3).join(" ");
        }
        movieSearch();
        break;

    case "concert-this":
        requestItem = process.argv.slice(3).join(" ");
        concertSearch();
        break;

    case "spotify-this-song":
        if(requestItem == undefined){
            requestItem = "The sign ace of base";
        } else {
            requestItem = process.argv.slice(3).join(" ");
        }
        songSearch();
        break;

    case "do-what-it-says":
        randomFile();
        break;

    default:
        return undefined;
};

function movieSearch() {
        axios.get("http://www.omdbapi.com/?t=" + requestItem + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);
    });

}

function concertSearch() {
    axios.get("https://rest.bandsintown.com/artists/" + requestItem + "/events?app_id=codingbootcamp").then(function(response) {
        if (response.data[0] == undefined) {
            console.log("Sorry! There are no upcoming events for that artist. Try again!");
        }else{
            console.log("Name of Venue: " + response.data[0].venue.name);
            console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region + " " + response.data[0].venue.country);
            console.log("Date of Event: " + moment(response.data[0].datetime).format('MM/DD/YYYY'));
        }
    }).catch(function(error) {
        console.log(error);
    });
}

function songSearch() {
    const Spotify = require("node-spotify-api");
    const spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: requestItem, limit: 1}, function(err, data) {
        if(err) {
            console.log(err);
        }
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Preview Link: " + data.tracks.items[0].preview_url);
        console.log("Album: " + data.tracks.items[0].album.name);
    });
}



function randomFile() {
    const fs = require("fs");
    fs.readFile("random.txt", "utf8", function(err, data) {
        if(err) {
            console.log(err);
        }
        let fileData = data.split(",");
        let fileCommand = fileData[0];
        requestItem = fileData[1];

        if(fileCommand == "concert-this") {
            concertSearch();
        } 
        else if(fileCommand == "movie-this") {
            movieSearch();
        }
        else if(fileCommand == "spotify-this-song") {
            songSearch();
        }
        else {
            console.log("That's not a valid command");
        }

    });
}


