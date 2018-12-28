const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write("This is the string");
        res.end();
    }
    if(req.url === '/api/books'){
       res.write(JSON.stringify([1,2,3,4,5]));
       res.end();
    }
});

server.listen(3000);
console.log('string');