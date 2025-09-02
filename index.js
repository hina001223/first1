const http=require('http');
const server=http.createServer((req,res)=>{
    res.end("hello server");

})
port=3002;
server.listen(port,()=>console.log("server is connected and now available"));
