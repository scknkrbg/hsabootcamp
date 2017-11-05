/* Mother-child age difference

Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.

Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.
*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


var new_arr = ancestry.filter((a)=> byName[a.mother] !== undefined)
.map((a)=>a.born - byName[a.mother].born)

console.log(average(new_arr));
//console.log(byName["Maria van Brussel"])

// Your code here.
/*
function momAgeDiff(arr){
  var df = [];
  arr.forEach((child)=>{
   // console.log(byName[child.name]);
    if(byName[child.mother] == null){
    }else{
     	df.push(child.born-byName[child.mother].born)
    }
  })
  console.log(df)
  return average(df);
}

console.log(momAgeDiff(ancestry))
*/
// → 31.2
