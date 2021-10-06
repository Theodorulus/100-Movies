class Movie {
	constructor(name, year, seen){
		this.name = name
		this.year = year
		this.seen = seen
	}
}

window.onload=function() {
	movies = [
		new Movie("12 Angry Men", 1957, true),
		new Movie("12 Years a Slave", 2013, true),
		new Movie("2001: A Space Odyssey", 1968, true),
		new Movie("3 Idiots", 2009, false),
		new Movie("A Beautiful Mind", 2001, true),
		new Movie("A Prophet", 2009, false),
		new Movie("Airplane!", 1980, true),
		new Movie("Alien", 1979, true),
		new Movie("Amadeus", 1984, true),
		new Movie("Amélie", 2001, false),
		new Movie("Apocalypse Now", 1979, false),
		new Movie("Austin Powers: International Man of Mystery", 1997, false),
		new Movie("Avatar", 2009, true),
		new Movie("Back to the Future", 1985, true),
		new Movie("Basic Instinct", 1992, true), 
		new Movie("Blade Runner", 1982, true), 
		new Movie("Braveheart", 1995, false),
		new Movie("Breakfast at Tiffany's", 1961, false),
		new Movie("Brokeback Mountain", 2005, false),
		new Movie("Casablanca", 1942, true),
		new Movie("Casino Royale", 2006, true),
		new Movie("City of God", 2002, false),
		new Movie("Dallas Buyers Club", 2013, true),
		new Movie("Die Hard", 1988, false),
		new Movie("Dirty Dancing", 1987, false),
		new Movie("Dracula", 1931, true),
		new Movie("Drive", 2011, true),
		new Movie("Dumb and Dumber", 1994, true),
		new Movie("E.T. the Extra-Terrestrial", 1982, false),
		new Movie("Enter the Dragon", 1973, false),
		new Movie("Fight Club", 1999, true),
		new Movie("Forrest Gump", 1994, true),
		new Movie("Four Weddings and a Funeral", 1994, false),
		new Movie("Gangs of New York", 2002, false),
		new Movie("Ghostbusters", 1984, true),
		new Movie("Gladiator", 2000, true),
		new Movie("Gone with the Wind", 1939, true),
		new Movie("Good Will Hunting", 1997, true),
		new Movie("Groundhog Day", 1993, true),
		new Movie("Hachi: A Dog's Tale", 2009, true),
		new Movie("Halloween", 1978, true),
		new Movie("In Bruges", 2008, false),
		new Movie("Inception", 2010, true),
		new Movie("Jaws", 1975, true),
		new Movie("Jurassic Park", 1993, false),
		new Movie("Lawrence of Arabia", 1962, false),
		new Movie("Léon: The Professional", 1994, false),
		new Movie("Mad Max: Fury Road", 2015, true),
		new Movie("Memento", 2000, true),
		new Movie("Moonlight", 2016, true),
		new Movie("No Country for Old Men", 2007, true),
		new Movie("One Flew Over the Cuckoo's Nest", 1975, false),
		new Movie("Psycho", 1960, true),
		new Movie("Pulp Fiction", 1994, true),
		new Movie("Indiana Jones and the Raiders of the Lost Ark", 1981, false),
		new Movie("Reservoir Dogs", 1992, true),
		new Movie("Rocky", 1976, false),
		new Movie("Saving Private Ryan", 1998, true),
		new Movie("Scarface", 1983, true),
		new Movie("Scent of a Woman", 1992, false),
		new Movie("The Dark Knight", 2008, true),
		new Movie("Star Wars", 1977, true),
		new Movie("Stand by Me", 1986, false),
		new Movie("Spirited Away", 2001, false),
		new Movie("Snatch", 2000, true),
		new Movie("Slumdog Millionaire", 2008, true),
		new Movie("Singin' in the Rain", 1952, false),
		new Movie("Seven Samurai", 1954, false),
		new Movie("Se7en", 1995, true),
		new Movie("Schindler's List", 1993, true),
		new Movie("The Deer Hunter", 1978, false),
		new Movie("The Departed", 2006, true),
		new Movie("The English Patient", 1996, false),
		new Movie("The Evil Dead", 1981, true),
		new Movie("The Godfather", 1972, true),
		new Movie("The Good, the Bad and the Ugly", 1966, false),
		new Movie("The Goonies", 1985, false),
		new Movie("The Great Dictator", 1940, false),
		new Movie("The Green Mile", 1999, true),
		new Movie("The Intouchables", 2011, true),
		new Movie("The Shining", 1980, true),
		new Movie("The Shawshank Redemption", 1994, true),
		new Movie("The Pursuit of Happyness", 2006, false),
		new Movie("The Prestige", 2006, true),
		new Movie("The Pianist", 2002, false),
		new Movie("The Notebook", 2004, true),
		new Movie("The Matrix", 1999, true),
		new Movie("The Lord of the Rings", 2001, true),
		new Movie("The Lion King", 1994, true),
		new Movie("The Last Emperor", 1987, false),
		new Movie("The Silence of the Lambs", 1991, true),
		new Movie("The Terminator", 1984, true),
		new Movie("The Usual Suspects", 1995, true),
		new Movie("The Wizard of Oz", 1939, false),
		new Movie("The Wolf of Wall Street", 2013, true),
		new Movie("Titanic", 1997, true),
		new Movie("Top Gun", 1986, false),
		new Movie("Trainspotting", 1996, false),
		new Movie("Up", 2009, false),
		new Movie("Vertigo", 1958, true)
	]
	no_of_movies_seen = 0
	ol = document.getElementById("movies")
	for (let i = 0; i < movies.length; i++) {
		movie = movies[i]
		if (movie.seen == true) {
			no_of_movies_seen ++
		}

		var li = document.createElement("li")
		if (movie.seen) {
			seen = "✔️"
		} else {
			seen = "❌"
		}
		li.innerHTML = movie.name + " (" + movie.year + ") " + seen
		ol.appendChild(li)

	}
	console.log(movies)
	document.getElementById("total_no_of_movies").innerHTML = "I have watched: " + no_of_movies_seen + " / 100 movies."
}