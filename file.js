const fs=require('fs');
fs.writeFile('example.txt',"Hello,How re you",(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("Succesfully created");
        fs.readFile('example.txt','utf8', (err,file)=>{
            if(err){
                console.log(err);

            }else{
                console.log(file)
            }
        });
    }
})

