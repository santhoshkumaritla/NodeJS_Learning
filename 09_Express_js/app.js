const http = require('http');//core module

const express = require('express')//external module
const requestHandler =require('./user')//local module

const app = express();

app.use("/",(req,res,next)=>{
  console.log("came in first middle ware ",req.url,req.method);
  next();
})

app.use("/submit",(req,res,next)=>{
  console.log("came in second  middleware",req.url,req.method)
  res.send("<h1>Welcome to santosh node js</h1>")
})
const server = http.createServer(app);

const PORT = 3001;
server.listen(PORT,()=>{
  console.log(`Sever Running on address http://localhost:${PORT}`);
});