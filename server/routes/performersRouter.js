const router = require('express').Router();
const {Users, Tasks, Categories, PerformersToTasks, AcceptedTasks} = require('../db/models')


router.get('/getUserPerformers', async(req,res)=>{
  //это все задания конкретного юзера
  const userMissions = await Tasks.findAll({where:{userId:req.session.user.id}})
  // console.log('userMissionsuserMissionsuserMissionsuserMissionsuserMissionsuserMissions',userMissions)
  const arrOfTaskIDs = []
  userMissions.map(el => {
    arrOfTaskIDs.push(el.id)
  })
  // console.log(arrOfTaskIDs)
  let taskIdAndItsPerformersIds = []
  arrOfTaskIDs.map(async (el) => {
    const newPerformerId = await PerformersToTasks.findAll({where:{taskId:el}})
    // console.log('-----------------------------------',newPerformerId)
    const result = newPerformerId.filter(el => el.userId !== null)
    let performersId = []
    for (let i = 0; i < result.length; i++) {
      performersId.push(result[i].userId)
    }
    // console.log("resultresultresultresultresultresultresult",result)
    // console.log("performerIdperformerIdperformerIdperformerIdperformerId",performersId)
    if(performersId.length > 0){
      taskIdAndItsPerformersIds.push({el, performersId})
    }
  })
  setTimeout(async()=>{
    let sendingResult = []
    // console.log('taskIdAndItsPerformersIdstaskIdAndItsPerformersIdstaskIdAndItsPerformersIds',taskIdAndItsPerformersIds)
    for (let i = 0; i < taskIdAndItsPerformersIds.length; i++) {
      const currentTask = await Tasks.findOne({where:{id:taskIdAndItsPerformersIds[i].el}})
      let performers = []
      for (let j = 0; j < taskIdAndItsPerformersIds[i].performersId.length; j++) {
        const currentPerformer = await Users.findOne({where:{id:taskIdAndItsPerformersIds[i].performersId[j]}})
        // console.log('currentPerformercurrentPerformercurrentPerformercurrentPerformer',currentPerformer)
        performers.push(currentPerformer)
      }
      sendingResult.push({currentTask, performers})
    }
    // console.log('sendingResultsendingResultsendingResultsendingResultsendingResult',sendingResult)
    res.json(sendingResult)
  },500)

})

router.post('/deletePerformer', async(req,res)=>{
  const {taskId, performerId} = req.body
  await PerformersToTasks.destroy({where:{taskId, userId:performerId}})
  res.redirect('/performers/getUserPerformers')
})

router.post('/acceptPerformer', async(req,res) =>{
  const userId = req.session.user.id
  const {taskId, performerId} = req.body
  const oneTask = await Tasks.findOne({where:{id:taskId}})

  const {title, address, time, date, price, description, image, categorie} = oneTask
  console.log(title, address, time, date, price, description, image, categorie) 
  // console.log('taskDatataskDatataskDatataskDatataskData',taskData)
  console.log('taskIdtaskIdtaskIdtaskIdtaskIdtaskId',taskId)
  console.log('performerIdperformerIdperformerIdperformerIdperformerId',performerId)
  const acceptedTask = await AcceptedTasks.create({ownerId:userId, performerId, title, address, time, date, price, description, image, categorie})
  try {
    await PerformersToTasks.destroy({where:{taskId}})
    await Tasks.destroy({where:{id:taskId}})
    console.log('acceptedTaskacceptedTaskacceptedTaskacceptedTaskacceptedTaskacceptedTaskacceptedTask',acceptedTask)
    
  } catch (error) { 
    console.log(error)
  }

  res.redirect('/performers/getUserPerformers')
})

module.exports = router;



// возвращает все задания, на которые юзера приняли
router.get('/allAcceptedTasks',async (req,res) => {
  console.log("firstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirst")
  const allAcceptedTasks = await AcceptedTasks.findAll({where:{performerId:req.session.user.id}})
  res.json(allAcceptedTasks)
})

// возвращает все задания юзера, на которые он принял кого-то
router.get('/allAcceptedMissions', async(req,res)=>{
  console.log("firstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirst")
  const allAcceptedTasks = await AcceptedTasks.findAll({where:{ownerId:req.session.user.id}})
  res.json(allAcceptedTasks)
})


//отмечает конкретное задание как выполненное 
router.post('/submitascomplitedforpodrabotka', async(req,res)=> {
  const {taskId} = req.body
  console.log(taskId)
  const changedTask = await AcceptedTasks.update({status:"done"},{where:{id:taskId}})
  console.log(changedTask)
  res.sendStatus(200)
})



router.post('/submitascomplitedforzadania', async(req,res)=> {
  console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
  const {taskId} = req.body
  const currentTask = await AcceptedTasks.findOne({where:{id:taskId}})

  const {ownerId, performerId, price} = currentTask
  
  const onwer = await Users.findOne({where:{id:ownerId}})
  const ownerAccount = onwer.account

  const performer = await Users.findOne({where:{id:performerId}})
  const performerAccount = performer.account

  const onwerUpdate = await Users.update({price:(ownerAccount-price)}, {where:{id:ownerId}})

  const performerUpdate = await Users.update({price:(performerAccount+price)}, {where:{id:performerId}})

  await AcceptedTasks.destroy({where:{id:taskId}})

  res.sendStatus(200)
})