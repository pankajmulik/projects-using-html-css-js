let http=require('http')
let url=require('url')
http.createServer(function(req,res)
{
  res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("creating first server")
    res.end();
  }).listen(8080)