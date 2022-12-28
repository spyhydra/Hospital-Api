const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    
    name:{

        type:String,
        require:true
        
    },

    doctor:{
        type:String,
        require:true
        

    },
     
    phone:{
        type:Number,
        require:true
    },

    status:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default: Date.now

    }
   

    
},{
    timestamps:true
})


const Patients=mongoose.model('Patients',userSchema)

module.exports=Patients;