const express=require('express');
const path=require('path');
const Joi=require('joi');

const  app=express();

app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.get('/example',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    res.send(req.params.name+":"+req.params.age);
});

app.listen('3000')