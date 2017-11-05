// Your code here.
function deepEqual(ob1, ob2){
	if((ob1 === null || ob2 === null) && ob1 !== ob2){
      return false;
    } else if(typeof ob1 !== typeof ob2){
      return false;
    } else if(typeof ob1 === 'object'){
      for(var i in ob1){
        return deepEqual(ob1[i], ob2[i]);
      }
    } else {
      if(ob1 !== ob2){
        return false;
      }
    }
  	return true;
}
      
    
console.log(deepEqual(null,null));

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
