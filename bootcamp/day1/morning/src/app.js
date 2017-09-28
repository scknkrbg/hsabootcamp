var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello, World!')
})

app.get('/hello', function(req, res){
    console.log("hello");
    res.send('hello');
})

app.get('/coin', function(req, res){
  var randomNumber = Math.random();
  if (randomNumber > 0.5){
    var coins = 'Head';
  } else {
    var coins = 'Tail';
  };

  res.send(coins);
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
