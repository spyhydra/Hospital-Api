const usersController=require('../controller/doctors_controllers')

const express=require('express')

const app=express();

const router = express.Router()


router.get('/',usersController.index)
router.use('/patients',require('./patients'));
router.use('/doctors',require('./doctors'));

router.use('/report',require('./report'));


module.exports = router;

