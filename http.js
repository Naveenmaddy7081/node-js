const http = require("http");


const server = http.createServer((req, res) =>{
    // console.log(req.url);   
    if (req.url == "/"){
        res.end("heloo fromm");

    }
    else if(req.url == "/about"){

    res.end("hello frome the other site");
    }
});

server.listen(8000, "127.0.0.1", () =>{
    console.log("listening to the port no 8000");
});