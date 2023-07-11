const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');

router.get('/', async (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.render('celebrities/celebrities', { celebrities });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/create', (req, res) => {
  res.render('celebrities/new-celebrity');
});

router.post('/create', async (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });

  try {
    await newCelebrity.save();
    res.redirect('/celebrities');
  } catch (error) {
    console.error(error);
    res.render('celebrities/new-celebrity');
  }
});

module.exports = router;