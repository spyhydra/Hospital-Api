const patientsController=require('../controller/patients_controller')

const reportController=require('../controller/report_controller')

const express=require('express');
const passport = require('passport');



const router = express.Router();


router.post('/register',passport.authenticate('jwt',{session:false}),patientsController.register)
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),reportController.createReport);
router.get('/:id/all_report',passport.authenticate('jwt',{session:false}),reportController.findAll);


module.exports=router;

