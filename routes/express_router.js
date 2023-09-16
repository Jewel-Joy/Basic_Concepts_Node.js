const express =require('express');
const route=express.Router();

route.get('/',(req,res)=>{
    res.send('Being Hit');
})
route.get('/example',(req,res)=>{
    res.send('Example Being Hit');
})
module.exports=route;