// Your code here.

  
function prepend(prep, rest=null){
  var obj = {};
  obj.value = prep;
  obj.rest = rest;
  return obj;
}
  
function nth (list, number){
  var arr = listToArray(list);
  return arr[number];
}

var l = {value:1, rest:{value:2, rest:null}};

console.log(nth(l,1));

function arrayToList(arr){
  var obj = {};
  if(arr != null){
    obj.value = arr[0];
    return arrayToList(arr.slice(1,));
                        
  } 
  return obj;
}

console.log(arrayToList([1,2,3]));

function listToArray(list){
  var arr = [];
  if(list != null){
    arr.push(list.value);
    return arr.concat(listToArray(list.rest));
  }
  return arr;
}

  
/*
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
*/
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
