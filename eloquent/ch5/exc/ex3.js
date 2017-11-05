/*
Historical life expectancy

When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.

Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).
*/

var ancestry = JSON.parse(require("../ancestry.js"));
// console.log(ancestry);
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(arr){
    var yy = [];
    arr.forEach((a)=>{
      if (yy.indexOf(Math.ceil(a.born/100)) == -1){
        yy.push(Math.ceil(a.born/100))
       }
      //console.log(Math.ceil(a.born/100), a.died, a.born, a.died-a.born)
    })
    
    var result = {}
    for(var i in yy){
      var seg = arr.filter((a)=>Math.ceil(a.born/100) == yy[i]).map((a)=>a.died-a.born)
      result[yy[i]] = average(seg);
      //console.log(yy[i], seg);
    }
  return result
}

console.log(groupBy(ancestry));
