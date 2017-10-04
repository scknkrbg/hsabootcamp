// Your code here.
function nth(list, number){
  if(number === 0){
    return list.value;
  } else if(list.rest != null) {
    return nth(list.rest, number-1);
  } else {
  return undefined;
  }
};

function prepend(value, rest){
  var obj = {};
  obj.value = value;
  obj.rest = rest;
  return obj;
};

function listToArray(list){
  var arr = [];
  if(list.rest === null){
    arr.push(list.value);
    return arr;
  } else {
    arr.push(list.value);
    return arr.concat(listToArray(list.rest));
  }
};

function arrayToList(arr){
  len = arr.length;
  if(len === 1){
    var obj = prepend(arr[0],null);
    return obj;
  } else {
    var obj = prepend(arr[0], arrayToList(arr.slice(1,len)))
    return obj;
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20