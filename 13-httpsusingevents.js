const http =require('http');

//Different way to create a server using event emitter
const server = http.createServer()
server.on('request',(req,res)=>{
    res.end('welcome');
})

server.listen(5000);