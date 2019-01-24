# liri-node-app

LIRI is a language interpretation and recognition interface. It is a command line node app that searches for concerts, songs on Spotify, and movies using the BandsInTown, Spotify, and OMDB APIs.

LIRI uses four commands and brings back data: concert-this, movie-this, spotify-this-song, and do-what-it-says.

**Concert-this**

This will search the BandsInTown API for the musician indicated and will return the following infomration:
- Name of Venue
- Venue Location
- Date of Event

![Image of concert-this with query](/images/concert-this_with_query.jpg)

**Movie-this**

This will search the OMDB API for the movie indicated and will return the following information:
- Title of movie
- Year the movie came out
- IMDB rating
- Rotten Tomatoes rating
- Country where the movie was produced
- Language of the movie
- Plot of the movie
- Actors in the movie

![Image of movie-this with query](/images/movie-this_with_query.jpg)

If the command is sent without a movie indicated, it will automatically bring back information for the movie "Mr. Nobody"

![Image of movie-this without query](/images/movie-this_no_query.jpg)

**Spotify-this-song**

This will search the Spotify API for the song indicated and will return the following infomration:
- Artist
- Song name
- Preview link of the song
- Album name

![Image of spotify-this with query](/images/spotify-this-song_with_query.jpg)

If the command is sent without a song indicated, it will automatically bring back information for the song "The Sign" by Ace of Base

![Image of spotify-this without query](/images/spotify-this-song_no_query.jpg)

**Do-what-it-says**

This will read a text file and perform the command written in the file. In this example, the file is referencing the command "spotify-this-song" for "I Want it That Way"

![Image of random text file](/images/random_txt_spotify.jpg)

when "do-what-it-says" is run, it will return the song information from the Spotify API

![Image of do-what-it-says](/images/do-what-it-says_spotify_result.jpg)


[Screencastify](https://drive.google.com/file/d/1nrFgWs6m9h_-LCLJE1bHqr0vSQO8BM7s/view)