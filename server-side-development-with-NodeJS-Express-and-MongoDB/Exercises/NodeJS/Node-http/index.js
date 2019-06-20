const http = require('http');
const fs = require('fs');
const path = require('path')
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req,res) => {
  console.log("request for " + req.url + 'by method '+ req.method); //create a server

  if(req.method == 'GET'){
      var fileURL;
      if (req.url == '/') fileURL = '/index.html';
      else fileURL = req.url;

      var filePath = path.resolve('./public' + fileURL);
      const fileExt = path.extname(filePath);

      if (fileExt == '.html'){
        fs.exists(filePath,(exists)=>{
            if (!exists) {
              res.statusCode = 404;
              res.setHeader = ('Content-Type','text/html');
              res.end('<html><body><h1>Error 404: '+fileURL +' not found </h1></body></html>');
              return;
            }
            else {
              res.statusCode = 400;
              res.setHeader = ('Content-Type','text/html');
              fs.createReadStream(filePath).pipe(res);
            }
        })
      }
      else {
        res.statusCode = 404;
        res.setHeader = ('Content-Type','text/html');
        res.end('<html><body><h1>Error 404: '+ fileURL +' not an html file </h1></body></html>');
        return;
      }

  }
  else {
    res.statusCode = 404;
    res.setHeader = ('Content-Type','text/html');
    res.end('<html><body><h1>Error 404:' + req.method +' not supported.</h1></body></html>');

    return;
  }
  //
  // res.statusCode = 200; //200 means everything is ok
  // res.setHeader('Content-Type','text/html');
  // res.end('<html><body><h1>Hello World! </h1></body></html>')
})

server.listen(port, hostname, ()=>{
  console.log(`Server running at http://${hostname}:${port}`) //use backquote``,not regular quotes.
})
