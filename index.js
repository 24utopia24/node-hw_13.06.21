var http = require("http"),
    fs = require("fs"),
    port = 5500,
    url = require("url"),
    path = require("path"),
    mime = require("mime");

http.createServer(function(request, response) {

    var uri = process.cwd() + request.url;
    console.log(uri);

    fs.readFile(uri, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n" + uri);
        response.end();
        return;
      }

      response.writeHead(200, {"Content-Type": mime.getType(uri)});
      response.write(file, "binary");
      response.end();
    });
  }).listen(port);

console.log("сервер запущен на \n  => http://localhost:" + port + "/");