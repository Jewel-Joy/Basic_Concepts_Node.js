const path = require('path');
const express=require('express');
const app=express();



const people=require('./routes/express_router')
app.use('/people',people);
app.listen(3000);