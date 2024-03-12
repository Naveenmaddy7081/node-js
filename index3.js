// CRUD operation
const fs= require('fs');
const path = require('path');
const dirPath =path.join(__dirname,'files');
const filePath=`${dirPath}/appendFile.txt`;

// fs.writeFileSync(filePath,'this is a simple text file');
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is update")
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated")
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)