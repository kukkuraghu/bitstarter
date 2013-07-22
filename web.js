var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
//var app = express();
//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));

app.get('/', function(request, response) {
  console.log(request.headers['user-agent']);
  response.send(fs.readFileSync("index.html").toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
