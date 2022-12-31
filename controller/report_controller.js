var Report=require('../models/report');
var Patients = require('../models/patients');
var Doctor=require('../models/doctor')




module.exports.createReport= async function(req,res){
    console.log('enter in create report');
    try {


const reportCreate= await Report.create({
    doctor:req.user._id,
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
    return res.json({
        message:'internal sever error'
    })
        
}


}


module.exports.findAll= async function(req,res){
    try 
    {
        //FINDING THE PATIENT FIRST..THEN POPULATING ITS REPORTS FIELD AND REPORT'S DOCTOR FIELD.
        let patient= await Patients.findById(req.params.id)
                                    .populate({
                                        path:'reports',
                                        //sorting the reports from oldest to latest
                                        options: { sort: { 'createdAt': 1 } } ,
                                        populate:{
                                           path:'doctor' 
                                        }
                                    });

        return res.status(200).json({
            message: "Found these reports of the concerned patient",
            data:{
                patient: patient
            }    
        });
        
    }
    catch (error)
    {
        console.log("Error Found:", error);
        return res.json(500, {
            message: "Internal Server Error",
        });
    }
}


//REPORTS BY STATUS ACTION
module.exports.reportsByStatus = async function(req,res)
{
    try {

        //FINDING THE REPORT BY STATUS AND POPULATING ITS DOCTOR AND PATIENT FIELD.
        let reports= await Report.find({status:req.params.status}).populate('doctor').populate('patient');

        return res.status(200).json({
          message: "Reports of patients having status " + req.params.status,
          data: {
            reports: reports
          },
        });

    } catch (error) {
        
       console.log("Error Found:", error);
       return res.json(500, {
         message: "Internal Server Error",
       }); 
    }
}