const { log } = require('console');
const express=require('express');
const app =express();
const port=80;
const db=require('./config/mongoose');
const passportJWT=require('./config/passport-JWT');
const passport=require('passport')



app.use(express.urlencoded());


app.use('/', require('./routes'));



app.listen(port,function(err){
    if(err){console.log("error in starting server");}
       
    console.log('Server starting on port no ', port);

})
