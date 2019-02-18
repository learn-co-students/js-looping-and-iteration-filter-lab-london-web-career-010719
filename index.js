// Code your solution in this file
function findMatching(driverArray, name){
  return driverArray.filter(function(item) {return item.toUpperCase() === name.toUpperCase()} );
}

function fuzzyMatch(driverArray, phrase){
  return driverArray.filter(function(item) {return item.startsWith(phrase); });
}

function matchName(driverArray, name){
  return driverArray.filter(function(item) {return item.name === name;});
}
