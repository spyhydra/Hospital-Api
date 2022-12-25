const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost/Hospital-api")

const db=mongoose.connection;

// if any kind of error found 
db.on('error',console.error.bind(console,'error in binding'));
db.once('open',function(){
    console.log('successfully connected to Database')
})
