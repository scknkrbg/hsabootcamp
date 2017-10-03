function range(start, end, step=1){
  var arr = [];
  function cond(a){
    if(start > end){
      return a>=end;
    } else {
      return a<=end;
    }
  }

  for(var i = start; cond(i);){
    arr.push(i);
    i += step;
  }
  return arr;
}

function sum(arr){
  var s = 0;
  for(var i=0; i<arr.length; i++){
    s += arr[i];
  }
  return s;
}


console.log(range(1,10,3));
console.log(range(10,1,-2));
console.log(sum(range(10,1,-2)));
console.log(sum(range(1,10,3)));
