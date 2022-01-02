
const express=require ('express');

const app= express();
const PORT=3000;
const path=require("path");
var bodyParser=require('body-parser');
const { home } = require('nodemon/lib/utils');

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/bmidisplay',(req,res)=>{
    var weight=req.body.height;
    var height=req.body.weight;
    var bmi=(height*10000)/(weight*weight);
    console.log(bmi);
    
    //res.sendFile(__dirname,'/home.html');
    // var document=home.html;
    // const para=document.createElement("p");
    // const node=document.createTextNode("BMI = "+bmi);
    // para.app.end
    res.send(`BMI is ${bmi}.`);
});
app.get('/home_style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "home_style.css");
  });
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'/about.html'));
});
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'));
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/home.html'));
});
app.listen(PORT,(req,res)=>{
console.log(`Server started on port ${PORT}`);
});


