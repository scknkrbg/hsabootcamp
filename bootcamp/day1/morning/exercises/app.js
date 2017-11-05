// try running this code with `node app.js`, and you'll notice it errors.
// what must you do to make the code work?

var express = require('express')
var app = express()

// use a for loop to create an array with each lowercase letter in the alphabet
// resulting array should be ['a', 'b', ... 'y', 'z']

// bahahaha i hope this causes a merge conflict so you can practice resolving
var alphabet = [];
for(var i=97; i<123; i++){
  alphabet.push(String.fromCharCode(i));
}


var deleteThis = ['sorry', 'guys']
for (var i = 0; i < deleteThis.length; i++) {
    console.log(deleteThis[i]);
}


// use a for loop to generate an app.get function for each endpoint
// callback function should res.send the letter's index in the alphabet
// do not use block scoped variables (let)
// do not use Array.prototype.forEach()
// first endpoint should be:
// app.get('/a', function(req, res) { res.send("1") });

for(var i=0; i<alphabet.length; i++){
  (function (i){
    app.get('/'+alphabet[i], function(req, res){res.send(String(i+1))});
  })(i)
}







// by the time you get to this point, jordan will have pushed a new commit
// updating ./students.js
// import that array into this file, and write an endpoint at GET /partners
// that randomly pairs students. feel free to use whatever data structure you
// see fit

var st = require("./students");

app.get('/partners', function (req, res) {
  var std_pairs = function (arr){
  console.log(arr);
  for(var i=0; i<100; i++){
    var a = Math.floor(Math.random()*arr.length);
    var b = Math.floor(Math.random()*arr.length);
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
  console.log(arr);
  var str = '';
  for(var i=0; i<arr.length; i++){
    str += String(arr[i])+'-'+String(arr[i+1])+'<br>';
    ++i
  }
  return str;
  }
  res.send(std_pairs(st));
});
  


app.get('/', function (req, res) {
    res.send('Hello, World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
