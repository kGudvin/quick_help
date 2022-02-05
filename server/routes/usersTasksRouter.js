const router = require('express').Router();
const { UsersTasks } = require('../db/models')



router.route('/')
.get(async(req, res) => {
    const allUsersTasks = await UsersTasks.findAll();
    
    res.json({allUsersTasks})
})

module.exports = router;
