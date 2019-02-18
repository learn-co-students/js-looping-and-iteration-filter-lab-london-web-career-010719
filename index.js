// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(
    function(driverName) {
      return driverName.toLowerCase() === name.toLowerCase();
    }
  );
}


function fuzzyMatch(drivers, letters){
  return drivers.filter(
    function(driverName){
        return driverName.slice(0,letters.length) === letters;
    }
  );
}


function matchName(drivers, name){

  function filter (drivers, condition) {
    const filteredDriver = [];

    for (const driver of drivers){
      if (condition(driver)){
        filteredDriver.push(driver)
      }
    }
    return filteredDriver;
  }

  return filter(drivers,function(driver){return driver.name === name});
}
