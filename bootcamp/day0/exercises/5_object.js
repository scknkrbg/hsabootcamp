// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// Assume no circular references
// HINT: recursion may help here

function hasFalsyValue(obj) {
  if (!obj)return true;
  if (typeof obj === 'string' && obj) return false;
  for(var i in obj){
    if(hasFalsyValue(obj[i])) return true;
  }
  return false;
}

var ob = {'a':1, 'b':2, ss: {'t':45}};
console.log(hasFalsyValue(ob));
