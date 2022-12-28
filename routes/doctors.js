const usersController=require('../controller/doctors_controllers')

const express=require('express')



const router = express.Router();
router.post('/register',usersController.register)

router.get('/login',usersController.login)






module.exports=router

