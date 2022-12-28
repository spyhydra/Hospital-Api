const patientsController=require('../controller/patients_controller')

const express=require('express')



const router = express.Router();


router.post('/register',patientsController.register)

module.exports=router;

