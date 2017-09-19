// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// Assume no circular references
// HINT: recursion may help here

function hasFalsyValue(obj) {
  var falsy = [false, null, undefined, 0, NaN, '',""];
  for(var i in obj){
    console.log(i+' '+falsy.includes(obj[i])+' '+typeof(i));
    if(typeof(i) === 'object'){
      hasFalsyValue(i);
    }
    else 
    {
      if(falsy.includes(obj[i])){
        return true;
      }
    }
  }
  return false;
}

var ob = {'a':1, 'b':2, ss: {'t':false}};
console.log(hasFalsyValue(ob));
