/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, ...scope) {
  let filteredAr = arr.filter(function(item) {
    scope.sort();
    return scope[1] >= item >= scope[0];
  });
  return filteredAr;
}
