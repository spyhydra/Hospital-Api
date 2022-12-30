const Report=require('../models/report');
const Patients = require('../models/patients');




module.exports.createReport= async function(req,res){
    console.log('enter in create report');
    try {


const reportCreate= await Report.create({
    doctor:req.user_id,
    status:req.body.status,
    patient:req.params.id

})

let patient=await Patients.findById(req.params.id)

patient.reports.push(reportCreate);
await patient.save();


let reportFound= await Report.findById(reportCreate._id).populate('doctor')
console.log(reportFound);

return res.status(200).json({
    message:'user report created successfully',
    data:{
        createdBy:reportFound.doctor.name,
        status:reportFound.status,
        createdOn:reportFound.createdAt.toDateString(),
        patient:{
            name:patient.name,
            age:patient.age,
            gender:patient.gender,
            phoneNo:patient.phone
        }
    }
})
    }
catch (error) {
    console.log(error);
        
}


}


module.exports.findAll= async function(req,res){
    let patient=await Report.find()
}