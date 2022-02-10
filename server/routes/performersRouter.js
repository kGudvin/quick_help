const router = require('express').Router();
const {Users, Tasks, Categories, PerformersToTasks} = require('../db/models')


router.get('/getUserPerformers', async(req,res)=>{
  //это все задания конкретного юзера
  const userMissions = await Tasks.findAll({where:{userId:req.session.user.id}})
  console.log('userMissionsuserMissionsuserMissionsuserMissionsuserMissionsuserMissions',userMissions)
  const arrOfTaskIDs = []
  userMissions.map(el => {
    arrOfTaskIDs.push(el.id)
  })
  console.log(arrOfTaskIDs)
  let taskIdAndItsPerformersIds = []
  arrOfTaskIDs.map(async (el) => {
    const newPerformerId = await PerformersToTasks.findAll({where:{taskId:el}})
    console.log('-----------------------------------',newPerformerId)
    const result = newPerformerId.filter(el => el.userId !== null)
    let performersId = []
    for (let i = 0; i < result.length; i++) {
      performersId.push(result[i].userId)
    }
    console.log("resultresultresultresultresultresultresult",result)
    console.log("performerIdperformerIdperformerIdperformerIdperformerId",performersId)
    if(performersId.length > 0){
      taskIdAndItsPerformersIds.push({el, performersId})
    }
  })
  setTimeout(async()=>{
    let sendingResult = []
    console.log('taskIdAndItsPerformersIdstaskIdAndItsPerformersIdstaskIdAndItsPerformersIds',taskIdAndItsPerformersIds)
    for (let i = 0; i < taskIdAndItsPerformersIds.length; i++) {
      const currentTask = await Tasks.findOne({where:{id:taskIdAndItsPerformersIds[i].el}})
      let performers = []
      for (let j = 0; j < taskIdAndItsPerformersIds[i].performersId.length; j++) {
        const currentPerformer = await Users.findOne({where:{id:taskIdAndItsPerformersIds[i].performersId[j]}})
        console.log('currentPerformercurrentPerformercurrentPerformercurrentPerformer',currentPerformer)
        performers.push(currentPerformer)
      }
      sendingResult.push({currentTask, performers})
    }
    console.log('sendingResultsendingResultsendingResultsendingResultsendingResult',sendingResult)
    res.json(sendingResult)
  },500)

})

router.post('/deletePerformer', async(req,res)=>{
  const {taskId, performerId} = req.body
  await PerformersToTasks.destroy({where:{taskId, userId:performerId}})
  res.redirect('/performers/getUserPerformers')
})


module.exports = router;