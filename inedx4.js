const express= require('express');
const app =express();

app.get('',(req,res)=>{
    res.send('hello, this is home');
});

app.get('/about',(req,res)=>{
    res.send('hello, this is about');
});

app.listen(6000);