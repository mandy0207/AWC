const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3600;

app.use('/static', express.static('static'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'))


app.get("/",(req, res)=>{

    res.status(200).render('index.html');
})




app.get("/about",(req, res)=>{

    res.status(200).render('about.html');
})



app.get("/home",(req, res)=>{

    res.status(200).render('index.html');
})


app.get("/purpose",(req, res)=>{
    res.status(200).render('program.html');
})



app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})