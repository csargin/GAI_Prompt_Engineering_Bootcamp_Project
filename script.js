 document.addEventListener('DOMContentLoaded', function() {
    var movies = [
        {title: 'The Shawshank Redemption', year: 1994, score: 9.3, image: 'movie1.jpg'},
        {title: 'The Godfather', year: 1972, score: 9.2, image: 'movie2.jpg'},
        {title: 'The Dark Knight', year: 2008, score: 9.01, image: 'movie2.jpg'},
        {title: 'The Godfather Part II', year: 1974, score: 9.01, image: 'movie2.jpg'},
        {title: '12 Angry Men', year: 1957, score: 9.01, image: 'movie2.jpg'},
        {title: 'Schindlers List', year: 1993, score: 9.01, image: 'movie2.jpg'},
        {title: 'The Lord of the Rings: The Return of the King', year: 2003, score: 9.01, image: 'movie2.jpg'},
        {title: 'Pulp Fiction', year: 1994, score: 8.91, image: 'movie2.jpg'},
        {title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, score: 8.91, image: 'movie2.jpg'},

    ];

    var moviesSection = document.getElementById('movies');

    movies.forEach(function(movie) {
        var movieDiv = document.createElement('div');
        movieDiv.className = 'movie';

        var title = document.createElement('h2');
        title.textContent = movie.title;

        var year = document.createElement('p');
        year.textContent = 'Year: ' + movie.year;

        var score = document.createElement('p');
        score.textContent = 'IMDb Score: ' + movie.score;

        var image = document.createElement('img');
        image.src = movie.image;

        movieDiv.appendChild(title);
        movieDiv.appendChild(year);
        movieDiv.appendChild(score);
        movieDiv.appendChild(image);

        moviesSection.appendChild(movieDiv);
    });
});










document.addEventListener('DOMContentLoaded', function() {
    var movies = [
        {title: 'The Shawshank Redemption', year: 1994, score: 9.3, image: 'movie1.jpg'},
        {title: 'The Godfather', year: 1972, score: 9.2, image: 'movie2.jpg'},
        // Add the rest of the movies here...
    ];

    var moviesTable = document.getElementById('movies');

    for (var i = 0; i < movies.length; i++) {
        if (i % 3 === 0) {
            var row = moviesTable.insertRow();
        }

        var cell = row.insertCell();

        var title = document.createElement('h2');
        title.textContent = movies[i].title;

        var year = document.createElement('p');
        year.textContent = 'Year: ' + movies[i].year;

        var score = document.createElement('p');
        score.textContent = 'IMDb Score: ' + movies[i].score;

        var image = document.createElement('img');
        image.src = movies[i].image;

        cell.appendChild(title);
        cell.appendChild(year);
        cell.appendChild(score);
        cell.appendChild(image);
    }
});
