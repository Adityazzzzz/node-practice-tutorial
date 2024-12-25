const http = require('http');

const server =http.createServer((req,res)=>{
    // console.log(req.method);

    const url= req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type': 'text/html'});
        res.write('<h1>Bunnyo</h1>')
        res.end()
    }
    else if(url==='/about'){

        res.writeHead(200,{'content-type': 'text/html'});
        res.write('<h1>about Bunnyo</h1>')
        res.end()
    }
    else{

        res.writeHead(404,{'content-type': 'text/html'});
        res.write('<h1>error</h1>')
        res.end()
    }
})
server.listen(5000)