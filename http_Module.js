const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Hello");
        res.end();
    }else{
        res.write("Hai");
        res.end();
    }
    
});

server.listen('3000');
const _=require('async');
let example=_.fill([1,2,3,4,5],"banana",1,4)
console.log(example);