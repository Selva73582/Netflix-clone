const express = require('express');
const router = express.Router();
const { addMovie, getMovies } = require('../controllers/movieController');
const authMiddleware = require('../middleware/authMiddleware');

// @route    POST api/movies
// @desc     Add a movie
// @access   Private
router.post('/', authMiddleware, addMovie);

// @route    GET api/movies
// @desc     Get all movies
// @access   Private
router.get('/', authMiddleware, getMovies);

module.exports = router;
