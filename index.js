var express = require('express');
var bodyParser = require('body-parser');
var { addScore, isPalindrome,  getTopFiveScores } = require('./validator');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.get('/', function(req, res) {
	res.render('index.html');
});

var scores = [];

app.post('/api/submitEntry', (req, res) => {	
	var {name, word } = req.body;	

	if (typeof name === 'undefined' || typeof word === 'undefined') {
		res.status(404).send('invalid name or word');
	}

	var hasValidWord = isPalindrome(word);		
	var entryScore = 0;

	if(hasValidWord) {
		entryScore = addScore(name, word, scores);
		scores.push({name:name, score:entryScore});
	}
	res.send({score:entryScore});
	
});

app.get('/api/getScores', (req, res) => {
	var topFiveScores = getTopFiveScores(scores);
	res.send(topFiveScores);
});

var port = 3000;
app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});



