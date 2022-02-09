const router = require('express').Router();
const {Users, Tasks, Categories, PerformersToTasks} = require('../db/models')



//  отдает все имеющиеся таски
router.get('/', async(req, res) => {
    const allTasks = await Tasks.findAll();
    console.log('---------------------------------------------------',allTasks);
    res.json({allTasks})
})

// находит конкретную таску по id
router.post('/getonetask/:id', async(req,res)=> {
    const id = req.params.id
    console.log(id, typeof(id));
    const oneTask = await Tasks.findOne({where:{id}})
    console.log(oneTask);
    res.json({oneTask})
})

//добавляет юзеру новую таску
router.post('/addnewuserstask', async(req,res) => {
  console.log("---------------------------------------------------------------------------");
    const {title,address,time,date,price,description,image,categories} = req.body
    console.log("categoriescategoriescategoriescategoriescategoriescategories", categories);
    const categoriesId = Number(categories)
    const reqCategorie =  await Categories.findOne({where:{id:categoriesId}})
    const pasteToDB = {
      ...req.body, categorie:reqCategorie.title, userId:req.session.user.id
    }
    
    const newUserTask = await Tasks.create(pasteToDB)
    const currentUserInDB = await Users.findOne({where:{id:req.session.user.id}})
    console.log('currentUserInDB.id', currentUserInDB.id);
    console.log(newUserTask.id);
    try {
      const uu = await PerformersToTasks.create({taskId: newUserTask.id, userId: null})
      
      console.log(uu);
    } catch (error) {
      console.log(error);
    }
    res.json(newUserTask)
})


//позволяет юзеру взяться за таску
router.post('/setonetasktouser', async(req,res)=> {
  console.log('object');
  const taskkId = req.body.taskId
  const currentUserInDB = await Users.findOne({where:{id:req.session.user.id}})
  console.log('currentUserInDBcurrentUserInDBcurrentUserInDBcurrentUserInDBcurrentUserInDB',currentUserInDB);
  try {
    const result = await PerformersToTasks.create({userId:currentUserInDB.id, taskId:taskkId})
    console.log('result.idresult.idresult.idresult.id',result.id);
    resForFront = await Tasks.findOne({where: {id:taskkId}})
    console.log(resForFront);
    res.json(resForFront)
  } catch (error) {
    console.log(error);
  }
})

//вернуть все таски, за которые взялся юзер
router.get('/getallUserPodrabotka', async(req,res) =>{
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
  console.log(req.session.user.id);
  const temp = await PerformersToTasks.findAll({where:{userId:req.session.user.id}})
  let tempor = []
  temp.map(el => tempor.push(el.taskId))
  // console.log(tempor);
  const result = []
  tempor.map(async (el)=> {
    const currentTask = await Tasks.findOne({where:{id:el}})
    console.log('currentTaskcurrentTaskcurrentTaskvvcurrentTaskcurrentTask',currentTask);
    result.push(currentTask)
  })
  setTimeout(()=>{
    console.log('resultresultresultresultresultresultresultresult',result);
    res.json(result)
  },300)
})

// возвращает все задания, которые добавил  конкретный юзер
router.get('/usermissions', async(req,res)=> {
  console.log(req.session.user.id);
  try {
    const userMissions= await Tasks.findAll({where:{userId:req.session.user.id}})
    console.log('--------------------------------------------------------------',userMissions);
    res.json({userMissions})
  } catch (error) {
    console.log(error);
  }
})





module.exports = router;
