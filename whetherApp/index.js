const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replacVal =(tempVal, orgVal) =>{
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);

    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

    return temperature;


    
}

const server = http.createServer((req, res) =>{
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=c07aed153678d317f9f7399df7eade4e")
        .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrdata = [objdata];
            // console.log(arrdata[0].main.temp);
            const realTimeData = arrdata.map((val) => replacVal(homeFile, val))
            .join("");
            res.write(realTimeData);
            // console.log(realTimeData);
        })
        .on("end", (err) => {
            if (err) return console.log("connection closed due to error", err);
            res.end();
            // console.log("end");
        });
    }
    
});

server.listen(8000, "127.0.0.1");