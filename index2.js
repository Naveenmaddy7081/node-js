// const fs = require('fs');

// const input = process.argv;

// if(input[2]== 'add'){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]== 'remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid output")
// }


const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file");
// }

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is", item)
    })
})