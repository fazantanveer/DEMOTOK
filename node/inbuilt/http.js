let http = require('http');
let server = http.createServer((req,res)=>{
    res.write('<h1>First node server</h1>');
    res.end()
})

server.listen(6780)