const http = require('http');
const requestHandler =require('./user')
const server = http.createServer(requestHandler);

const PORT = 3001;
server.listen(PORT,()=>{
  console.log(`Sever Running on address http://localhost:${PORT}`);
});