var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.status(200).send('hello world');
	res.end();
});

app.listen(8080);
