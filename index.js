// Code your solution in this file
function findMatching(drivers, name){
    let newArray = drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())

    return newArray
}

function fuzzyMatch(drivers, name) {
    let newArray = drivers.filter(driver => driver[0,1] == name[0,1])
    return newArray
}


function matchName(drivers, name){
    return drivers.filter(function (driver) {return driver.name === name})
}