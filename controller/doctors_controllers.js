const User = require('../models/doctor');



module.exports.index=function(req,res){
 
        console.log("enter");
    
   return res.send('successfully login')
}
//................. function for register a doctor ..............//
module.exports.register= async function(req,res){
 
const{name,email,password} = req.body;

try {
console.log('enter');
        let user= await User.findOne({email})

        if (!user){
             const newUser= new User({
                name,
                email,
                password
             })
             await newUser.save();
             return res.send(newUser)
        }
 
        return res.send('ok')


        
} catch (error) {
        console.log(error);
        
}
     
    
}


//................. function for Login as doctor ..............//

module.exports.login= async function(req,res){
        console.log("enter in login");
           const email=req.body.email;
           const password=req.body.password
           const user=await User.findOne({email});
          
           
             if(user){
           if(user.email==email&&user.password==password){
                return res.send(user)

           }
        }
           return res.send('f')


}