const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')

const router = require('express').Router()

// render the form to create new movie!
router.get('/create', async (req, res) => {
    try {
        const celebrities = await Celebrity.find()
        req.render('movies/new-movie', { celebrities })
    } catch (error) {
        next(error)
    }
})

// handles the form submission and creates a new movie!
router.post('/create', async (req, res) => {
    const { title, genre, plot, cast } = req.body

    try { 
        const newMovie = new Movie({
            title,
            genre,
            plot,
            cast: Array.isArray(cast) ? cast : [cast], 
        })
        await newMovie.save()
        res.redirect('/movies')
    } catch(error) {
        next(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find()
        req.render('/movies/movies', { movies })
    } catch(error) {
        next(error)
    }
})
module.exports = router;