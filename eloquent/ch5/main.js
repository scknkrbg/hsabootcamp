function forEach(array, method){
  for(var i = 0; i < array.length; i++){
    method(array[i]);
  }
}

/*
forEach(['osman', 'sekeer', 'ismet', 'badem'],
(i) => console.log(i,' ',i.length));
*/

function noisy(f){
  return function (arg) { 
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}

// noisy((i)=> i**i)(5,4,3);

var family = require('./ancestry');
family = JSON.parse(family);
//console.log(family);
//console.log(JSON.stringify(family));
//console.log(JSON.parse(family)[0].name);

function filter (array, test) {
  var pass = [];
  for (var i = 0; i < array.length; i++) { 
    if(test(array[i]))
      pass.push(array[i]);
  }
  return pass;
}

console.log(filter(family, function(person) {
  return person.born === 1905;
}));

  
