
function findMatching(array, name) {
  return array.filter(function (n) { return n.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(array, name) {
  return array.filter(function (n) { return n[0,1] === name[0,1]; });
}

function matchName(array, name) {
  return array.filter(function (n) { return n.name === name; });
}
