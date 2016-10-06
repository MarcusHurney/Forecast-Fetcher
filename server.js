var express = require('express');
var bodyParser = require('body-parser');

var app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send(__dirname + '/public/index.html');
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});
