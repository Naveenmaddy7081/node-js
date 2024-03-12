const express = require('express');
const path= require('path');

const app= express();
const publicPath= path.join(__dirname,'public');

app.set('view engine', 'ejs');

// app.use(express.static(publicPath));

app.get('',(_,resp) =>{
    resp.sendFile(`${publicPath}/index.html`)

})

app.get('/profile',(_,resp)=>{
    const user={ 
        name:'anu sisi',
        email:'anu@123gmail.com',
        city:'noida' 

    }

    resp.render('profile',{user});
})

app.get('/about',(_,resp) =>{
    resp.sendFile(`${publicPath}/about.html`)

})
app.get('*',(_,resp) =>{
    resp.sendFile(`${publicPath}/nopage.html`)
})

app.listen(5000);