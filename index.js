// Code your solution in this file

function findMatching(array, string) {

  // works but not wild about syntax
  // let names = array.filter(word => word.toLowerCase() === string.toLowerCase()) 
  
  return array.filter(function (name) { 
    return name.toLowerCase() === string.toLowerCase() 
  });
;}


function fuzzyMatch(list, string) {
  let lettersToMatch = string.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lettersToMatch) === string;
  });
}


function matchName(array, string) {

  return array.filter(function(driver) 
    {return driver.name.toLowerCase()===string.toLowerCase()})


};









