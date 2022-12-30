const patientsController=require('../controller/patients_controller')

const reportController=require('../controller/report_controller')

const express=require('express')



const router = express.Router();


router.post('/register',patientsController.register)
router.post('/:id/create_report',reportController.createReport);

module.exports=router;

