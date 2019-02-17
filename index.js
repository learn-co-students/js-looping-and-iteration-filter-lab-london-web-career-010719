function findMatching(arr, str) {
    return arr.filter(function (name) { return str.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(arr, str) {
    return arr.filter(function (name) { return name.slice(0, str.length) === str })
}

function matchName(arr, str) {
    return arr.filter(function (driver) { return driver.name.toLowerCase() === str.toLowerCase(); })
}

