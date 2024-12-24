const http = require('http');
const {readFileSync}=require('fs');


const homepage = readFileSync('./navbar/index.html')
const homeStyles = readFileSync('./navbar/styles.css')
const homeLogic = readFileSync('./navbar/browser-app.js')

const server =http.createServer((req,res)=>{

    const url= req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type': 'text/html'});
        res.write(homepage)
        res.end()
    }
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type': 'text/css'});
        res.write(homeStyles )
        res.end()
    }
    else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type': 'text/javascript'});
        res.write(homeLogic)
        res.end()
    }
    
    else{
        res.writeHead(404,{'content-type': 'text/html'});
        res.write('<h1>Page not found</h1>')
        res.end()
    }

    
})
server.listen(5000)