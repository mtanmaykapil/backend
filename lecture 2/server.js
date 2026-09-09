const express= require("express");

const app= express(); //server is created 

app.get('/home',(req,res)=>{
    res.send("Server is showing home ");
    
})

app.get('/about',(req,res)=>{
    res.send("server is showing about ");
    
})

app.listen(3000,()=>{
    console.log("Server is running on 3000");
    
})