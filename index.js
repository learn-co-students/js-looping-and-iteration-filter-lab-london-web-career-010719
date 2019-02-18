// Code your solution in this file


//returns the matching list of drivers and should be case insensitive.
function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toUpperCase() === name.toUpperCase();
  });
}

//returns all drivers whose names begin with the provided letters
function fuzzyMatch(drivers, letters) {
  let letterLength = letters.length;

  return drivers.filter(function (driverName) {
    return driverName.slice(0, letterLength) === letters;
  });
}

//returns each element whose `name` property matches the provided `string` argument.
function matchName(drivers, name) {
  return drivers.filter (function (driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
