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

    gender:{
        type:String,
        require:true
    },
    
    age:{
        type:Number,
        require:true
    },

    reports:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Report'
    }]

},{
    timestamps:true
})


const Patients=mongoose.model('Patients',userSchema)

module.exports=Patients;