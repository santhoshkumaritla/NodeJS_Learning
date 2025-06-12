const express = require('express')
const hostRouter = express.Router();

const path = require('path')

const rootDir = require('../utils/pathutil')

hostRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,"views",'addhome.html'))
})

hostRouter.post("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,"views",'homeadded.html'))
})

module.exports = hostRouter;

