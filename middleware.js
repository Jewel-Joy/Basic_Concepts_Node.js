const bodyParser = require('body-parser');
const express=require('express');
const app=express();

app.use(bodyParser.json());
app.use((req,res,next)=>{
    console.log(req.url,req.method)
    next();
})
app.get('/',(req,res)=>{
    res.send("Middleware");

})
app.listen(3000);