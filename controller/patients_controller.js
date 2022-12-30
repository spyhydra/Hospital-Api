const Patients = require('../models/patients');



// ................... register a patients .................
module.exports.register= async function(req,res){
    console.log("enter in patients");

    const {name,doctor,phone,gender,age}=req.body;

    try {

        let user=await Patients.findOne({doctor});
        if(!user){
            const newUser= new Patients({
                name,
                phone,
                doctor,
                gender,
                age
                
            })
                    await newUser.save();
                    return res.send(newUser)

        }
        return res.send(user)
        
    } catch (error) {
        console.log(error);
    }

}



