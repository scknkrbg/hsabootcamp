// The variable arguments is a object that contains the parameters passed to a
// function. It is not an array, but it has an array-link structure.
// Use call() and Array.prototype.reduce() to output "Hello, world!"

var notArr;

function populateNotArr() {
  var arr = [];
  for (var i in arguments){
    arr.push(arguments[i]);
  }

  var z = function(a,b){return a+b;};
  notArr = arr;
//  console.log(notArr);
  return  Array.prototype.reduce.call(arr, z, '');  
}

populateNotArr('Hello', ',', ' ', 'world', '!');

//console.log(notArr);
