const express = require('express')

const homeRouter = express.Router();

const path = require('path')

const rootDir = require('../utils/pathutils')

homeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir,"views",'home.html'))
});

module.exports = homeRouter;