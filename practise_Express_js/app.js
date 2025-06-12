const express = require('express');

const app = express();
const path = require('path')
const rootDir = require('./utils/pathutils')
const contactRouter = require('./routes/contactRouter')
const homeRouter = require('./routes/homeRouter')


// app.use((req,res,next)=>{
//   console.log("First Dummy middleware",req.url,req.method)
//   res.send("<h1>Welcome to Santhosh Coding</h1>")
// })

app.use(express.urlencoded())
app.use(contactRouter)
app.use(homeRouter)

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,"views",'404.html'))
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Running on address http://localhost:${PORT}`);
});
