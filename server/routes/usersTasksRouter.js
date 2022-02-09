const router = require('express').Router();
const {Users, UsersTasks, Categories, UsersToUserTasks} = require('../db/models')



//  отдает все имеющиеся таски
router.post('/:lim', async(req, res) => {
    let lim = Number(req.params.lim)
    const allUsersTasks = await UsersTasks.findAll({limit:lim});
    console.log('---------------------------------------------------',req.params);
    res.json({allUsersTasks})
})

// находит конкретную таску по id
router.post('/getonetask/:id', async(req,res)=> {
    const id = req.params.id
    // console.log(id, typeof(id));
    const oneTask = await UsersTasks.findOne({where:{id}})
    // console.log(oneTask);
    res.json({oneTask})
})

//добавляет юзеру новую таску
router.post('/addnewuserstask', async(req,res) => {
    const {title,address,time,date,price,description,image,categories} = req.body
    // console.log(categories);
    const categoriesId = Number(categories)
    const reqCategorie =  await Categories.findOne({where:{id:categoriesId}})
    const pasteToDB = {
      ...req.body, categorie:reqCategorie.title
    }
    
    const newUserTask = await UsersTasks.create(pasteToDB)
    const currentUserInDB = await Users.findOne({where:{id:req.session.user.id}})
    console.log('currentUserInDB.id', currentUserInDB.id);
    console.log(newUserTask.id);
    try {
      const uu = await UsersToUserTasks.create({ownerId: currentUserInDB.id, taskId: newUserTask.id, status: false, performerId: null})
      
      // console.log(uu);
    } catch (error) {
      console.log(error);
    }
    res.json(newUserTask)
})


//позволяет юзеру взяться за таску
router.post('/setonetasktouser', async(req,res)=> {
  const taskkId = req.body.taskId
  const currentUserInDB = await Users.findOne({where:{id:req.session.user.id}})
  console.log('currentUserInDBcurrentUserInDBcurrentUserInDBcurrentUserInDBcurrentUserInDB',currentUserInDB);
  const result = await UsersToUserTasks.update({performerId:currentUserInDB.id},{where:{taskId:taskkId}})
  if(result[0]===1){
    resForFront = await UsersTasks.findOne({where: {id:taskkId}})
  }
  console.log(resForFront);
  res.json(resForFront)
})







module.exports = router;
