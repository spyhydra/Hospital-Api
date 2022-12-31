const usersController=require('../controller/doctors_controllers')
const ReportController=require('../controller/report_controller')

const express=require('express')
const passport = require('passport');



const router = express.Router();

router.get('/:status',passport.authenticate('jwt',{session:false}),ReportController.reportsByStatus)

module.exports=router