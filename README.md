# liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.


### What Each Command Should Do
- concert-this `<artist/band name here>`
    - Function takes the userInput (command) and the userQuery(band/ artist), and returns the next venue name, venue location and date of the event 
    - If no band is entered, it will inform the user to enter a band
    ![image of concert-this in bash](/images/concert-this.png)

- movie-this `<movie name here>`
    - Function takes the userInput (command) and the userQuery(song), and returns title of the movie, year the movie came out, IMDB Rating of the movie , Rotten Tomatoes Rating of the movie, country where the movie was produced, language of the movie, plot of the movie, and actors in the movie.
    - If no movie is entered, it will suggest that you go watch Mr. Nobody on Netflix
    ![image of movie-this in bash](/images/movie-this.png)
 

- spotify-this-song `<song name here>`
    - Function takes the userInput (command) and the userQuery(song), and returns the artist, full track name, a link to the song and the album.
    - If no song is entered, it will return the specs for the song "Scared of the Dark"
    ![image of spotify-this-song in bash](/images/spotify-this-song.png)

- do-what-it-says 
    - LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    ![image of do-what-it-says in bash](/images/do-what-it-says.png)

### APIs Utilized
- Bands In Town
- OMBD
- Spotify


