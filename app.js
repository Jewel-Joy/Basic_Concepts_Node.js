const tutorial=require('./tutorial');

console.log(tutorial.sum(2,5));
console.log(tutorial.PI);
const readline=require('readline');
const rl=readline.createInterface({input:process.stdin,output:process.stdout});
let num1=Math.floor((Math.random()*10)+1);
let num2=Math.floor((Math.random()*10)+1);
let ans=num1+num2;

rl.question(` what is ${num1} +${num2}?\n`,
(userInput)=>{
   if(userInput.trim()==ans){
    rl.close();
   }else{
    rl.setPrompt("Incorrect")
    rl.prompt();
    rl.on('line',(userInput)=>{
        if(userInput.trim()==ans){
            rl.close();
           }
    })
   }

});

rl.on('close',()=>
{console.log("Right answer")})


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



