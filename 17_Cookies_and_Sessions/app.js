// Core Module
const path = require('path');

// External Module
const express = require('express');
const session = require('express-session')
const MongodbStore = require('connect-mongodb-session')(session)
const DB_PATH = "mongodb+srv://root:root@santhoshkumar.gdeqetq.mongodb.net/airbnb?retryWrites=true&w=majority&appName=SanthoshKumar"

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const authRouter = require("./routes/authRouter")
const {default:mongoose} = require('mongoose')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const store = new MongodbStore({
  uri:DB_PATH,
  collection:'sessions'
})

app.use(express.urlencoded());
app.use(session({
  secret:"Knowledge AI with Santhosh",
  resave:false,
  saveUninitialized:true,
  store
}))
app.use((req,res,next)=>{
  req.isLoggedIn=req.session.isLoggedIn;
  next()
})
app.use(storeRouter);
app.use("/host",(req,res,next)=>{
  if(!req.isLoggedIn){
    return res.redirect("/login")
  }
  next();
})
app.use("/host", hostRouter);
app.use(authRouter)

app.use(express.static(path.join(rootDir, 'public')))

app.use(errorsController.pageNotFound);

const PORT = 3000;
mongoose.connect(DB_PATH).then(()=>{
  console.log("Connected to mongoose successfully")
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err=>{
  console.log("Error while connecting to mongo",err);
});