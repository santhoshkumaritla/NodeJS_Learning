const fs  = require('fs')

console.log('1. Start the script')

console.log('2. Reading file synchronously')
const datasync = fs.readFileSync('user-details.txt','utf-8')
console.log('3. Synchronous read complete')

console.log('4. Reading file asynchronously')
fs.readFile('user-details.txt','utf8',(err,dataAsync)=>{
  if(err) throw err;
  console.log('6. Asynchronous read complete');
})

console.log('5. End of script')
