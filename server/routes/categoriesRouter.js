const router = require('express').Router();
const { Categories } = require('../db/models')


router.get('/', async(req, res) => {
  const categories = await Categories.findAll();
  res.json({categories})
})


module.exports = router;
