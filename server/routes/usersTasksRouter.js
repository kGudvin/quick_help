const router = require('express').Router();
const { UsersTasks } = require('../db/models')



router.get('/', async(req, res) => {
    const allUsersTasks = await UsersTasks.findAll();
    console.log('---------------------------------------------------',allUsersTasks);
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

router.post('/addnewuserstask', async(req,res) => {
    // const {title,address,time,date,price,description,image,categories} = req.body
    const newUserTask = await UsersTasks.create(req.body)
    const allPosts = await UsersTasks.findAll()
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',allPosts);
    console.log(allPosts);
    res.json(newUserTask)
})
