const usersController=require('../controller/users')

const express=require('express')


const router = express.Router();

router.get('/',usersController.index)

module.exports=router;