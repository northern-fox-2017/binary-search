'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 44]

function ownSort(arr) {
  arr.sort(function(a,b) {return a-b});  
  return arr
}

function binarySearch (search, array) {
  array = ownSort(array); 
    
  var end = array.length-1;
  var mid = Math.floor(end / 2);
  var index = 0;
  var start = mid + 1;        //console.log(array);

  for (var i = 0; i < array.length; i++) {  debugger
    if (search === array[mid]) {
      index = mid;
      break;
    } else if (search < array[mid]) {
        mid = Math.floor((mid-1) / 2);
    } else if (search > array[mid]) {
        start = end + 1;
        end = array.length - 1;
        mid = Math.floor((end - start) / 2);
    } else {
      index = -1;
    } 
  } //console.log('index: ' + index);debugger
  return index;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted) === 0)  // true
console.log(binarySearch(10, arrayGenapSorted) === 5) // false
console.log(binarySearch(33, arrayGenapSorted) === -1) // true

console.log(binarySearch(53, arrayGanjilSorted)) // 4
console.log(binarySearch(3, arrayGanjilSorted)) // 0
console.log(binarySearch(2, arrayGanjilSorted)) // -1

// module.exports = {
//   binary_search
// }
