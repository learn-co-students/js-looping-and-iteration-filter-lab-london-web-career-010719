// Code your solution in this file
function findMatching(drivers, string){
  const result = drivers.filter(driver => driver.toLowerCase() == string.toLowerCase())
  return result
}

function fuzzyMatch(drivers, string){
  const result = drivers.filter(driver => driver[0] == string[0]);
  return result
}

function matchName(drivers, string) {
   const result = drivers.filter(driver => driver.name == string);
   return result
}
