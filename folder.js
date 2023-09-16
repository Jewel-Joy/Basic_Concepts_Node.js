//Create Folder
const fs=require('fs');
fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log("Error");
        
    }else{
        console.log("Succesfully created folder");
    }
})

//Remove Folder

const fs=require('fs');
fs.mkdir('tutorial1',(err)=>{
    if(err){
        console.log("Error");
        
    }else{
        fs.rmdir('tutorial1',(err)=>{
            if(err){
                console.log("Error");

            }else{
                console.log("Removed succesfuuly")
            }
        })
    }
})