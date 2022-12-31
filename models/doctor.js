const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    
    name:{

        type:String,
        require:true
        
    },

    email:{
        type:String,
        require:true,
        unique: true,

    },

    password:{
        type:String,
        require:true,
          
    }
    
},{
    timestamps:true
})


const Doctor=mongoose.model('Doctor',userSchema)

module.exports=Doctor;