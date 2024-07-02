const Movie = require('../models/Movie');

exports.addMovie = async (req, res) => {
    const { title, description, genre, releaseDate, duration } = req.body;
    try {
        let movie = new Movie({
            title,
            description,
            genre,
            releaseDate,
            duration
        });

        await movie.save();
        res.json(movie);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
