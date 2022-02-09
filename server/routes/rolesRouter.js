const router = require('express').Router();
const { Roles } = require('../db/models')



router.route('/')
.get(async(req, res) => {
    const roles = await Roles.findAll();
    res.json({roles})
})


module.exports = router;
