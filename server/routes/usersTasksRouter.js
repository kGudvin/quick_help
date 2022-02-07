const router = require('express').Router();
const { UsersTasks } = require('../db/models')



router.get('/', async(req, res) => {
    const allUsersTasks = await UsersTasks.findAll();
    
    res.json({allUsersTasks})
})


router.post('/getonetask/:id', async(req,res)=> {
    const id = req.params.id
    console.log(id, typeof(id));
    const oneTask = await UsersTasks.findOne({where:{id}})
    console.log(oneTask);
    res.json({oneTask})
})
module.exports = router;
