const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    
    name:{

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


module.exports=mongoose.model("Patient",userSchema)