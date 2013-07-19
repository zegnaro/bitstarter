var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
    var data = fs.readFileSync('index.html');
    response.send(data.toString('utf8', 0, data.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
