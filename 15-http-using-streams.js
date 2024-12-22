var http = require('http');
var fs= require('fs');

http.createServer(function(req,res){
    // const text =fs.readFileSync('./content/big.txt','utf8');
    // res.end(text);

    const file= fs.createReadStream('./content/big.txt','utf8');
    file.on('open',(res)=>{
        file.pipe(res);
    })
    file.on('error',(res)=>{
        res.end(err);
    })
})

.listen(5000);