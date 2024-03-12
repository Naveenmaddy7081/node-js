// const os = require("./osmode");
// console.log(os);

const http= require('http');
http.createServer((req,resp) =>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify({name:'Anil sidhu',email:'anil@123.com'}));
    resp.end();

}).listen(5000);