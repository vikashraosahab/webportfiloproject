// import express in node js by require methods
const express = require('express');
const app = express();
// for importing path module
const path = require('path');
const hbs = require('hbs');
const url = require('url')


// set router for router methods
const router = express.Router();
const PortNumber = process.env.port ||3000;

hbs.registerPartials(path.join(__dirname,'../templates/partials'));
app.set('view engine' , 'hbs');
app.set('views',path.join(__dirname,'../templates/views'));
app.use('/',express.static(path.join(__dirname,'../public/')));
app.use('/wheather',express.static(path.join(__dirname,'../public/')));
app.use('/about',express.static(path.join(__dirname,'../public/')));
app.use(router);

router.get('/',(req,res)=>{
  res.render('index');
});

router.get('/home',(req,res)=>{
	res.render('index');
});

router.get('/wheather',function (req,res){
 return res.render('wheather');
});

router.get('/about',(req,res)=>{
   res.render('about');
});

router.get('*',(req,res)=>{
   res.render('errorpage');
})




app.listen(PortNumber,(err)=>{
  console.log(`Yes your server is running on port ${PortNumber}`);
});