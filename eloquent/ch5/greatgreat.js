var family = require('./ancestry')
var ancestry = JSON.parse(family);
//console.log(JSON.parse(family);

var byName = {};
ancestry.forEach(function(person){
  byName[person.name] = person
})

// reduceAncestors function
function reduceAncestors(person, f, defaultValue){
  function valueFor(person){
    if(person == null)
      return defaultValue;
    else
      return f(person, 
              valueFor(byName[person.mother]), 
              valueFor(byName[person.father])
              );
  }
  return valueFor(person);
}

// sharedDNA function
function sharedDNA(person, fromMother, fromFather){
  if(person.name == "Pauwels van Haverbeke")
    return 1;
  else
    return (fromMother, fromFather)/2;
}
// console.log(byName["Maria Sturm"]);

var ph = byName["Pauwels van Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0));
console.log(module.id);
console.log(module.exports);

// countAncestors function
function countAncestors(person, test){
  function combine(current, fromMother, fromFather){
    var thisOneCounts = current != person && test(current);
    return fromFather + fromMother + (thisOneCounts ? 1 : 0);
  }
  return reduceAncestors(person, combine, 0);
}

function longLivingPercentage(person){
  var all = countAncestors(person, function(person){
    return true;});
  var longLiving = countAncestors(person, function(person){
    return (person.died - person.born)>=70;});
  return longLiving/all;
}

console.log(longLivingPercentage(byName["Emile Haverbeke"]));

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

function isInSet(set, person){
  return set.indexOf(person.name) > -1;
}

/*
console.log(ancestry.filter(function(person){
  return isInSet(theSet, person);
}));
*/

console.log(ancestry.filter(isInSet.bind(null, theSet)));

