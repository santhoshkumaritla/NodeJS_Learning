const http = require('http')
const server = http.createServer((req,res)=>{
  console.log(req);
});

const PORT = 3001;
server.listen(PORT,()=>{
  console.log(`Sever Running on address http://localhost:${PORT}`);
})