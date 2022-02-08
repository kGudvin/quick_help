const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Users } = require('../db/models') 

router.route('/check')
.post((req, res) => {
    if(req.session.user){
      return res.status(200).json({user: req.session.user})
    }
res.sendStatus(401);
})

router.route('/signup')
.post(async (req, res) => {
  
    const {email, name, password} = req.body;
    if(email && name && password){
        const cryptPass = await bcrypt.hash(password, Number(process.env.SALT_ROUND))
        try{
            const currentUser =  await Users.create({...req.body, password:cryptPass})
            req.session.user = {id:currentUser.id, name:currentUser.name, role_id: currentUser.role_id}
            return res.json({user:{id:currentUser.id, name:currentUser.name, role_id: currentUser.role_id}})
        }catch(err){
      
            return res.sendStatus(500)
        }
    } else {
        return res.sendStatus(500)
    }
})

router.route('/signin')
.post(async (req, res) => {
    const {email, password} = req.body;
    if(email && password){
        try{
            const currentUser = await Users.findOne({where:{email}})
            if(currentUser && await bcrypt.compare(password, currentUser.password)){
                req.session.user = {id:currentUser.id, name:currentUser.name, role_id: currentUser.role_id}
                return res.json({user:{id:currentUser.id, name:currentUser.name,role_id: currentUser.role_id}})
            } else {
                return res.sendStatus(500)
            }
        }catch(err){
          
            return res.sendStatus(500)
        }
    }else{
        return res.sendStatus(500)
    }

})


router.route('/logout')
.post((req, res) => {
    req.session.destroy()
    res.clearCookie('sid').sendStatus(200)
})

//получение однного юзера
router.route('/userpage/')
.get(async (req, res) => {
  const id = req.session.user.id
  const currentUser = await Users.findOne({where:{id}})
  console.log({currentUser});
  res.json({currentUser})
})


router.route('/updateuserinfo')
.patch( async (req,res) => {

    const {name,secondname,patronymic,age,about,phone,categories } = req.body
    const user = Users.update(
      {
        name,secondname,patronymic,age,about,phone
      },
    {where:{id:req.session.user.id}})
    res.json({user})
})


module.exports = router;
